import { Module } from '@nestjs/common';
import { connectionProviders } from './connection.provider';

@Module({
  providers: [...connectionProviders],
  exports: [...connectionProviders],
})
export class DatabaseModule {}
