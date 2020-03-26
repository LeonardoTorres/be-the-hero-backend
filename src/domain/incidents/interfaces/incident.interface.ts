import { Ong } from 'src/domain/ongs/interfaces/ong.interface';

export interface Incident {
  id: number;
  title: string;
  description: string;
  value: number;
  city: string;
  uf: string;
  ong: Ong;
}
