
exports.up = function(knex, Promise) {
  return knex.schema.createTable( 'actions', tbl => {
    tbl
        .increments();
    tbl
        .text('description')
        .notNullable();
    tbl
        .text('notes')
        .notNullable();
    tbl
        .boolean('complete')
        .defaultTo(false)
        .notNullable();
    tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable()
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};