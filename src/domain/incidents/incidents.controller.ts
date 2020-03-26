import {
  Controller,
  Body,
  Post,
  Get,
  UseGuards,
  Headers,
  Delete,
  Param,
  HttpCode,
  Query,
  Res,
} from '@nestjs/common';
import { CreateIncidentDto } from './dtos/create-incident.dto';
import { IncidentsService } from './incidents.service';
import { AuthGuard } from '../auth/auth.guard';
import { Incident } from './interfaces/incident.interface';

@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() incident: CreateIncidentDto,
    @Headers('authorization') ongId: string,
  ) {
    const incidentPO = {
      ...incident,
      ongId,
    };
    return this.incidentsService.create(incidentPO);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(AuthGuard)
  async remove(
    @Param('id') incidentId: number,
    @Headers('authorization') ongId: string,
  ) {
    await this.incidentsService.remove(incidentId, ongId);
  }

  @Get()
  async list(@Query('page') page: number, @Res() res) {
    const result = await this.incidentsService.list(page);
    res.header('X-Total-Count', result.total);
    res.json(result.data);
  }

  @Get('ong')
  @UseGuards(AuthGuard)
  async getIncidentsByOngId(
    @Headers('authorization') ongId: string,
  ): Promise<Incident[]> {
    return this.incidentsService.getIncidentsByOngId(ongId);
  }
}
