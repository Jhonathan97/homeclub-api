import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ApartmentsModule } from './apartments/apartments.module';
import { ApartmentDetailsModule } from './apartment_details/apartment_details.module';

@Module({
  imports: [PrismaModule, ApartmentsModule, ApartmentDetailsModule],
})
export class AppModule {}
