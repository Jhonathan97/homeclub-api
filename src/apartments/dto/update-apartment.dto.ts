/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateApartmentDto } from './create-apartment.dto';

export class UpdateApartmentDto extends PartialType(CreateApartmentDto) {}
