import { Injectable, Inject } from '@nestjs/common';
import * as Knex from 'knex';
import { Incident } from './interfaces/incident.interface';

@Injectable()
export class IncidentsRepository {
  constructor(
    @Inject('DbIncidentsConnection')
    private readonly incidentsDb: Knex,
  ) {}

  async create(incidents) {
    return await this.incidentsDb().insert({
      ...incidents,
    });
  }

  async list(page = 1): Promise<{}> {
    const [total] = await this.incidentsDb().count();
    const data = await this.incidentsDb()
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])
      .join('ongs', 'ongs.id', '=', 'incidents.ongId')
      .limit(5)
      .offset((page - 1) * 5);
    return {
      total: total['count(*)'],
      data,
    };
  }

  async getById(incidentId: number): Promise<Incident> {
    return this.incidentsDb()
      .select('ongId as ong')
      .where('id', incidentId)
      .first();
  }

  async getIncidentsByOngId(ongId: string): Promise<Incident[]> {
    return this.incidentsDb()
      .select('*')
      .where('ongId', ongId);
  }

  async remove(incidentId: number): Promise<Incident> {
    return this.incidentsDb()
      .where('id', incidentId)
      .del();
  }
}
