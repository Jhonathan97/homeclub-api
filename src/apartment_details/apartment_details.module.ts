import { Module } from '@nestjs/common';
import { ApartmentDetailsController } from './apartment_details.controller';
import { ApartmentDetailsService } from './apartment_details.service';

@Module({
  controllers: [ApartmentDetailsController],
  providers: [ApartmentDetailsService]
})
export class ApartmentDetailsModule {}
