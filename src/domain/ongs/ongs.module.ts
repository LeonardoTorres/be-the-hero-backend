import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infrastructure/database/connection.module';
import { OngsController } from './ongs.controller';
import { OngsService } from './ongs.service';
import { OngsRepository } from './ongs.repository';
import { ongsProviders } from './ongs.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [OngsController],
  providers: [OngsService, OngsRepository, ...ongsProviders],
  exports: [OngsService],
})
export class OngsModule {}
