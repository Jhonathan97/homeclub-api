/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaDb2Service } from '../prisma/prisma-db2.service';
import { CreateApartmentDetailDto } from './dto/create-apartment-detail.dto';
import { UpdateApartmentDetailDto } from './dto/update-apartment-detail.dto';

@Injectable()
export class ApartmentDetailsService {
  constructor(private readonly prisma: PrismaDb2Service) {}

  async create(dto: CreateApartmentDetailDto) {
    try {
      const { imageUrl, ...rest } = dto;
      return await this.prisma.apartmentDetail.create({
        data: {
          ...rest,
          imageUrl: imageUrl || '',
        },
      });
    } catch (error) {
      throw new BadRequestException(
        'Error al crear el detalle del apartamento: ',
        error,
      );
    }
  }
  async findAll() {
    try {
      return await this.prisma.apartmentDetail.findMany();
    } catch (error) {
      throw new BadRequestException(
        'Error al obtener los detalles de apartamentos: ',
      );
    }
  }

  async findOne(id: number) {
    try {
      const apartment = await this.prisma.apartmentDetail.findUnique({
        where: { id },
      });
      if (!apartment) {
        throw new NotFoundException('Detalles de apartamento no encontrados');
      }
      return apartment;
    } catch (error) {
      throw new BadRequestException(
        'Error al obtener detalles del apartamento : ',
      );
    }
  }

  async update(id: number, dto: UpdateApartmentDetailDto) {
    try {
      const apartment = await this.prisma.apartmentDetail.findUnique({
        where: { id },
      });
      if (!apartment) {
        throw new NotFoundException(
          `Detalles del apartamento con ID ${id} no encontrado`,
        );
      }
      return await this.prisma.apartmentDetail.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'Error al actualizar detalles del apartamento: ',
      );
    }
  }

  async remove(id: number) {
    try {
      const apartment = await this.prisma.apartmentDetail.findUnique({
        where: { id },
      });
      if (!apartment) {
        throw new NotFoundException(
          `Detalles del apartamento con ID ${id} no encontrado`,
        );
      }
      return await this.prisma.apartmentDetail.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Error al eliminar apartamento: ');
    }
  }
}
