import * as Knex from 'knex';
import * as config from '../../../knexfile';

export default class Connection {
  private config: Knex.Config;
  private tableName: string;

  constructor(tableName: string) {
    this.config = config.development;
    this.tableName = tableName;
  }

  public build<t, q>(): Knex.QueryBuilder {
    return Knex<t, q[]>(this.config)(this.tableName);
  }
}
