
exports.up = function(knex, Promise) {
  return knex.schema.createTable('campers', table => {
      table.increments('id').primary()
      table.text('image')
      table.text('username')
      table.text('bio')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('campers')
};
