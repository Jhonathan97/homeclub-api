import { ApiProperty } from '@nestjs/swagger';

export class ApartmentResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Propiedad Torrenazas' })
  name: string;

  @ApiProperty({ example: 40.421172 })
  latitude: number;

  @ApiProperty({ example: -3.668683 })
  longitude: number;

  @ApiProperty({ example: 'Corporativa' })
  type: string;

  @ApiProperty({ example: 3000 })
  rateToday: number;

  @ApiProperty({
    example: 1.2,
    description: 'Distancia en km desde la ubicación enviada',
  })
  distance: number;

  @ApiProperty({ example: 'Apartamento moderno con vista al parque' })
  description: string;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  imageUrl: string;
}
