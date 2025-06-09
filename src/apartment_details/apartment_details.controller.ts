import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApartmentDetailsService } from './apartment_details.service';
import { CreateApartmentDetailDto } from './dto/create-apartment-detail.dto';
import { UpdateApartmentDetailDto } from './dto/update-apartment-detail.dto';

@Controller('apartment-details')
export class ApartmentDetailsController {
  constructor(
    private readonly apartmentDetailsService: ApartmentDetailsService,
  ) {}

  @Post()
  create(@Body() dto: CreateApartmentDetailDto) {
    return this.apartmentDetailsService.create(dto);
  }

  @Get()
  findAll() {
    return this.apartmentDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentDetailsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateApartmentDetailDto,
  ) {
    return this.apartmentDetailsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.apartmentDetailsService.remove(id);
  }
}
