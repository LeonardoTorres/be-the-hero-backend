import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IncidentsRepository } from './incidents.repository';
import * as crypto from 'crypto';
import { Incident } from './interfaces/incident.interface';
import { CreateIncidentDto } from './dtos/create-incident.dto';

@Injectable()
export class IncidentsService {
  constructor(private readonly incidentsRepository: IncidentsRepository) {}

  async create(incident: CreateIncidentDto) {
    const [id] = await this.incidentsRepository.create(incident);
    return { id };
  }

  async list(page: number): Promise<any> {
    return this.incidentsRepository.list(page);
  }

  async remove(incidentId: number, ongId: string): Promise<void> {
    const incidentToRemove = await this.getIncidentById(incidentId);
    if (incidentToRemove) {
      if (incidentToRemove.ong !== ongId) {
        throw new UnauthorizedException();
      }
    } else {
      throw new NotFoundException();
    }
    await this.incidentsRepository.remove(incidentId);
  }

  async getIncidentsByOngId(ongId: string): Promise<Incident[]> {
    return this.incidentsRepository.getIncidentsByOngId(ongId);
  }

  async getIncidentById(incidentId: number): Promise<any> {
    return await this.incidentsRepository.getById(incidentId);
  }
}
