import Connection from './connection';

export const connectionProviders = [
  {
    provide: 'Connection',
    useClass: Connection,
  },
];
