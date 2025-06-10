import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { GetApartmentsQueryDto } from './dto/get-apartments-query.dto';
import { SearchPropertiesDto } from './dto/search-properties.dto';
import { ApartmentSearchResultDto } from './dto/apartment-search-result.dto';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Post()
  @ApiBody({ type: CreateApartmentDto })
  @ApiResponse({ status: 200, description: 'Creacion de apartamento' })
  create(@Body() dto: CreateApartmentDto) {
    return this.apartmentsService.create(dto);
  }

  @Get()
  findAll(@Query() query: GetApartmentsQueryDto) {
    return this.apartmentsService.findAll({
      ...query,
      isActive:
        query.isActive === undefined ? undefined : query.isActive === 'true',
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentsService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateApartmentDto })
  @ApiResponse({ status: 200, description: 'Actualziacion de apartamento' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateApartmentDto,
  ) {
    return this.apartmentsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentsService.remove(id);
  }

  @Post('search')
  @ApiBody({ type: SearchPropertiesDto })
  @ApiResponse({
    status: 200,
    description: 'Lista de apartamentos filtrados, ordenados y con detalles',
    type: ApartmentSearchResultDto,
  })
  async search(@Body() dto: SearchPropertiesDto) {
    return this.apartmentsService.searchApartments(dto);
  }

  @Get('search-country')
  async searchCountry(@Query() query: GetApartmentsQueryDto) {
    return this.apartmentsService.getByCountry({
      ...query,
    });
  }
}
