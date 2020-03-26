import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOngDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  whatsapp: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  uf: string;
}
