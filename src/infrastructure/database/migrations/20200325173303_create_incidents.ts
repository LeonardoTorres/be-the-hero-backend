import * as Knex from 'knex';

export function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('incidents', function(
    table: Knex.TableBuilder,
  ) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();

    table.string('ongId').notNullable();

    table
      .foreign('ongId')
      .references('id')
      .inTable('ongs');
  });
}

export function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('incidents');
}
