import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OngsModule } from './domain/ongs/ongs.module';
import { IncidentsModule } from './domain/incidents/incidents.module';
import { AuthModule } from './domain/auth/auth.module';

@Module({
  imports: [OngsModule, IncidentsModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
