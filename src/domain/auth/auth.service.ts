import { Injectable, UnauthorizedException } from '@nestjs/common';
import { OngsService } from '../ongs/ongs.service';

@Injectable()
export class AuthService {
  constructor(private readonly ongsService: OngsService) {}

  async validateSignIn(ongId: string): Promise<object> {
    const ong = await this.ongsService.getById(ongId);
    if (!ong) {
      throw new UnauthorizedException();
    }
    return { id: ong.id };
  }
}
