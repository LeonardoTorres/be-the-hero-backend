import Connection from '../../../src/infrastructure/database/connection';

export const ongsProviders = [
  {
    provide: 'DbOngsConnection',
    useFactory: async (): Promise<any> => {
      return () => new Connection('ongs').build();
    },
  },
];
