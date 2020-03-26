import { IsNotEmpty } from 'class-validator';

export class CreateIncidentDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  value: number;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  uf: string;
}
