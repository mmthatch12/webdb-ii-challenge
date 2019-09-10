
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.string('VIN').unique().notNullable();
      tbl.string('Make').unique().notNullable();
      tbl.string('Model').unique().notNullable();
      tbl.integer('Mileage').notNullable();
      tbl.string('Transmission type').nullable();
      tbl.string('Title status').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists()
};
