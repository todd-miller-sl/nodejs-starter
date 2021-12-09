/**
 * The table name.
 *
 * @type {string}
 */
module.exports.table = 'users';

/**
 * Run the migrations.
 */
module.exports.up = (knex) =>
  knex.schema.createTable(this.table, (table) => {
    table.increments();
    table.timestamps();
    table.string('name').notNullable();
    table.string('email').notNullable().unique({
      indexName: 'user_unique_email',
      deferrable: 'immediate',
    });
  });

/**
 * Reverse the migrations.
 */
module.exports.down = (knex) => knex.schema.dropTableIfExists(this.table);
