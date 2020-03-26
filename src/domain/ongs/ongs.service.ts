import { Injectable } from '@nestjs/common';
import { OngsRepository } from './ongs.repository';
import * as crypto from 'crypto';
import { Ong } from './interfaces/ong.interface';
import { CreateOngDto } from './dtos/create-ong.dto';

@Injectable()
export class OngsService {
  constructor(private readonly ongRepository: OngsRepository) {}

  async create(ong: CreateOngDto) {
    const id = crypto.randomBytes(4).toString('HEX');
    const ongPO: Ong = {
      id,
      ...ong,
    };
    await this.ongRepository.create(ongPO);
    return { id };
  }

  async list(): Promise<Ong[]> {
    return this.ongRepository.list();
  }

  async getById(ongId: string): Promise<Ong> {
    return this.ongRepository.getById(ongId);
  }
}
