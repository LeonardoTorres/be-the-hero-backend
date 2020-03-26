import { Injectable, Inject } from '@nestjs/common';
import * as Knex from 'knex';
import { Ong } from './interfaces/ong.interface';

@Injectable()
export class OngsRepository {
  constructor(
    @Inject('DbOngsConnection')
    private readonly ongsDb: Knex,
  ) {}

  async create(ong: Ong) {
    await this.ongsDb().insert({
      ...ong,
    });
  }

  async list(): Promise<Ong[]> {
    return this.ongsDb().select('id', 'name');
  }

  async getById(ongId: string): Promise<Ong> {
    return this.ongsDb()
      .select('id')
      .where('id', ongId)
      .first();
  }
}
