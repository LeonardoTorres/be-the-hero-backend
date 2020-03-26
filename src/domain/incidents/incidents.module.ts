import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infrastructure/database/connection.module';
import { IncidentsController } from './incidents.controller';
import { IncidentsService } from './incidents.service';
import { IncidentsRepository } from './incidents.repository';
import { incidentsProviders } from './incidents.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [IncidentsController],
  providers: [IncidentsService, IncidentsRepository, ...incidentsProviders],
})
export class IncidentsModule {}
