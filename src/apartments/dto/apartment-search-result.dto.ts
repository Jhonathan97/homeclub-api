import { ApiProperty } from '@nestjs/swagger';
import { ApartmentResponseDto } from './apartment-response.dto';

export class ApartmentSearchResultDto {
  @ApiProperty({ example: 11 })
  total: number;

  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 2 })
  totalPages: number;

  @ApiProperty({ type: [ApartmentResponseDto] })
  apartments: ApartmentResponseDto[];
}
