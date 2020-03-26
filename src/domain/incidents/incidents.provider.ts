import Connection from '../../../src/infrastructure/database/connection';

export const incidentsProviders = [
  {
    provide: 'DbIncidentsConnection',
    useFactory: async (): Promise<any> => {
      return () => new Connection('incidents').build();
    },
  },
];
