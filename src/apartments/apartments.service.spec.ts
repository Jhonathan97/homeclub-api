import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentsService } from './apartments.service';
import { PrismaDb1Service } from '../prisma/prisma-db1.service';
import { PrismaDb2Service } from '../prisma/prisma-db2.service';
import { SearchPropertiesDto } from './dto/search-properties.dto';
import { prismaDb1Mock } from '../../test/mocks/prisma-db1.service.mock';
import { prismaDb2Mock } from '../../test/mocks/prisma-db2.service.mock';

describe('ApartmentsService', () => {
  let service: ApartmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApartmentsService,
        {
          provide: PrismaDb1Service,
          useValue: prismaDb1Mock,
        },
        {
          provide: PrismaDb2Service,
          useValue: prismaDb2Mock,
        },
      ],
    }).compile();

    service = module.get<ApartmentsService>(ApartmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return apartments with distance and details', async () => {
    const dto: SearchPropertiesDto = {
      latitude: 40.416775,
      longitude: -3.70379,
      page: 1,
      limit: 5,
    };

    prismaDb1Mock.apartment.findMany.mockResolvedValue([
      {
        id: 1,
        name: 'Apt 1',
        latitude: 40.416775,
        longitude: -3.70379,
        type: 'corporate',
        isActive: true,
      },
    ]);

    prismaDb2Mock.apartmentDetail.findMany.mockResolvedValue([
      {
        apartmentId: 1,
        description: 'Descripción de prueba',
        imageUrl: 'https://test.com/image.jpg',
      },
    ]);

    prismaDb1Mock.apartmentRate.findMany.mockResolvedValue([
      {
        startDate: new Date('2025-01-01'),
        endDate: new Date('2025-12-31'),
        price: 2000,
      },
    ]);
    const result = await service.searchApartments(dto);

    expect(result).toHaveProperty('total');
    expect(result).toHaveProperty('page', 1);
    expect(result).toHaveProperty('totalPages');
    expect(result).toHaveProperty('apartments');
    expect(Array.isArray(result.apartments)).toBe(true);
    if (result.apartments.length > 0) {
      expect(result.apartments[0]).toHaveProperty('description');
      expect(result.apartments[0]).toHaveProperty('imageUrl');
      expect(result.apartments[0]).toHaveProperty('rateToday');
    }
  });
});
