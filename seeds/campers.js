
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw("DELETE FROM 'camper'; ALTER SEQUENCE camper_id_seq RESTART WITH 3;")
    .then(function () {
      // Inserts seed entries
      let campers = [
        {
          id: 1, 
          username:'',
          bio:'',
        },
        {
          id: 2, 
          username: '',
          bio: ''
        },
        {
          id: 3,
          username: '',
          bio: ''
        }
      ]
      return knex('camper').insert(campers)
    });
};



