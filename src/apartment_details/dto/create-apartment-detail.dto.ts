import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateApartmentDetailDto {
  @IsInt()
  @IsNotEmpty()
  apartmentId: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;
}
