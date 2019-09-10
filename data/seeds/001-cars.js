
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'vin55566666', make: 'Toyota', model: 'Camry', mileage: 123000, transmission: 'standard', title: 'clean' }
      ]);
    });
};
