
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.string('vin').unique().notNullable();
      tbl.string('make').unique().notNullable();
      tbl.string('model').unique().notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission').nullable();
      tbl.string('title').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists()
};
