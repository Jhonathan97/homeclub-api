import { PartialType } from '@nestjs/mapped-types';
import { CreateApartmentDetailDto } from './create-apartment-detail.dto';

export class UpdateApartmentDetailDto extends PartialType(
  CreateApartmentDetailDto,
) {}
