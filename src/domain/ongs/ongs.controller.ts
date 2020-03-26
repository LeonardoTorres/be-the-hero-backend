import { Controller, Inject, Get, Post, Body } from '@nestjs/common';
import { OngsService } from './ongs.service';
import { Ong } from './interfaces/ong.interface';
import { CreateOngDto } from './dtos/create-ong.dto';

@Controller('ongs')
export class OngsController {
  constructor(private readonly ongService: OngsService) {}

  @Post()
  async create(@Body() ong: CreateOngDto) {
    return this.ongService.create(ong);
  }

  @Get()
  async get(): Promise<Ong[]> {
    return this.ongService.list();
  }
}
