
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars2').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars2').insert([
        { vin: 'vin55566666', make: 'Toyota', model: 'Camry', mileage: 123000, transmission: 'standard', title: 'clean' },
        { vin: 'vin777766666', make: 'Dodge', model: 'truck', mileage: 10, transmission: 'standard', title: 'dirty' }
      ]);
    });
};
