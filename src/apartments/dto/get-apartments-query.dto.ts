import { IsOptional, IsString, IsBooleanString } from 'class-validator';

export class GetApartmentsQueryDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsBooleanString()
  isActive?: string;
}
