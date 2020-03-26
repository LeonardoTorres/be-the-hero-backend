import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OngsModule } from '../ongs/ongs.module';

@Module({
  imports: [OngsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
