import { IsEnum, IsInt, IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum ApartmentType {
  CORPORATE = 'Corporativo',
  TOURISTIC = 'Turístico',
}

export class SearchPropertiesDto {
  @ApiProperty({ example: 40.416775, description: 'Latitud del usuario' })
  @IsNumber()
  @Type(() => Number)
  latitude: number;

  @ApiProperty({ example: -3.70379, description: 'Longitud del usuario' })
  @IsNumber()
  @Type(() => Number)
  longitude: number;

  @ApiPropertyOptional({
    example: 'Corporativo',
    enum: ['Corporativo', 'Turístico'],
  })
  @IsOptional()
  @IsEnum(ApartmentType)
  type?: ApartmentType;

  @ApiPropertyOptional({ example: 1000 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @ApiPropertyOptional({ example: 5000 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxPrice?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;
}
