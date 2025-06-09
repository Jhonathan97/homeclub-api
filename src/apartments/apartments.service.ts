/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaDb1Service } from '../prisma/prisma-db1.service';
import { PrismaDb2Service } from '../prisma/prisma-db2.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { SearchPropertiesDto } from './dto/search-properties.dto';
import { ApartmentWithDetails } from '../common/interfaces/apartment-with-details.interface';
import { getRateToday } from '../common/utils/get-validate-rate';
import { calculateDistance } from '../common/utils/haversine';
import { ApartmentWithDistance } from '../common/interfaces/apartment-with-distance.interface';

@Injectable()
export class ApartmentsService {
  constructor(
    private readonly prisma: PrismaDb1Service,
    private readonly prismaDb2: PrismaDb2Service,
  ) {}

  async create(dto: CreateApartmentDto) {
    try {
      const { typeApartmentId, ...apartmentData } = dto;
      return this.prisma.apartment.create({
        data: {
          ...apartmentData,
          typeApartment: {
            connect: { id: typeApartmentId },
          },
        },
      });
    } catch (error) {
      console.log('error: ', error);
      throw new BadRequestException('Eerror al crear el apartamento: ', error);
    }
  }

  async findAll(filters: {
    type?: string;
    city?: string;
    country?: string;
    isActive?: boolean;
  }) {
    try {
      return await this.prisma.apartment.findMany({
        where: {
          ...(filters.type && { typeApartment: { name: filters.type } }),
          ...(filters.city && { city: filters.city }),
          ...(filters.country && { country: filters.country }),
          ...(filters.isActive !== undefined && { isActive: filters.isActive }),
        },
        include: {
          typeApartment: true,
        },
      });
    } catch (error) {
      console.log('error: ', error);
      throw new BadRequestException(
        'Error al obtener los apartamentos: ',
        error,
      );
    }
  }

  async findOne(id: number) {
    try {
      const apartment = await this.prisma.apartment.findUnique({
        where: { id },
        include: { typeApartment: true },
      });
      if (!apartment) {
        throw new NotFoundException('Apartamento no encontrado');
      }
      return apartment;
    } catch (error) {
      throw new BadRequestException('Error al obtener el apartamento: ');
    }
  }

  async update(id: number, dto: UpdateApartmentDto) {
    const { typeApartmentId, ...apartmentData } = dto;
    try {
      const apartment = await this.prisma.apartment.findUnique({
        where: { id },
      });
      if (!apartment) {
        throw new NotFoundException(`Apartamento con ID ${id} no encontrado`);
      }
      return await this.prisma.apartment.update({
        where: { id },
        data: {
          ...apartmentData,
          typeApartment: {
            connect: { id: typeApartmentId },
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error al actualizar apartamento: ');
    }
  }

  async remove(id: number) {
    try {
      const apartment = await this.prisma.apartment.findUnique({
        where: { id },
      });
      if (!apartment) {
        throw new NotFoundException(`Apartamento con ID ${id} no encontrado`);
      }
      return await this.prisma.apartment.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error al eliminar apartamento: ');
    }
  }

  async searchApartments(dto: SearchPropertiesDto): Promise<{
    total: number;
    page: number;
    totalPages: number;
    apartments: ApartmentWithDetails[];
  }> {
    try {
      const {
        latitude,
        longitude,
        page = 1,
        limit = 10,
        type,
        minPrice,
        maxPrice,
      } = dto;

      if (!latitude || !longitude) {
        throw new BadRequestException('Latitude y longitude son requeridas.');
      }

      const skip = (page - 1) * limit;
      const today = new Date();

      const apartments = await this.prisma.apartment.findMany({
        where: {
          isActive: true,
          ...(type && {
            typeApartment: { name: type },
          }),
        },
        include: {
          typeApartment: true,
          rates: true,
        },
      });

      const filtered: ApartmentWithDistance[] = apartments
        .map((apt) => {
          const rateToday = getRateToday(apt.rates, today);
          if (rateToday === null) return null;

          if (
            (minPrice !== undefined && rateToday < minPrice) ||
            (maxPrice !== undefined && rateToday > maxPrice)
          ) {
            return null;
          }

          const distance = calculateDistance(
            Number(latitude),
            Number(longitude),
            Number(apt.latitude),
            Number(apt.longitude),
          );

          return {
            id: apt.id,
            name: apt.name,
            latitude: Number(apt.latitude),
            longitude: Number(apt.longitude),
            type: apt.typeApartment.name,
            rateToday,
            distance,
          };
        })
        .filter((apt): apt is ApartmentWithDistance => apt !== null);

      filtered.sort((a, b) => a.distance - b.distance);

      const paginated = filtered.slice(skip, skip + limit);
      const apartmentIds = paginated.map((apt) => apt.id);

      const details = await this.prismaDb2.apartmentDetail.findMany({
        where: {
          apartmentId: {
            in: apartmentIds,
          },
        },
      });

      const detailMap = new Map<
        number,
        { description: string; imageUrl: string }
      >();
      details.forEach((detail) => {
        detailMap.set(detail.apartmentId, {
          description: detail.description,
          imageUrl: detail.imageUrl,
        });
      });

      const apartmentsWithDetails: ApartmentWithDetails[] = paginated.map(
        (apt) => {
          const detail = detailMap.get(apt.id);
          return {
            ...apt,
            description: detail?.description ?? null,
            imageUrl: detail?.imageUrl ?? null,
          };
        },
      );

      return {
        total: filtered.length,
        page,
        totalPages: Math.ceil(filtered.length / limit),
        apartments: apartmentsWithDetails,
      };
    } catch (error) {
      console.log('error: ', error);
      throw new InternalServerErrorException('Error al buscar apartamentos');
    }
  }
}
