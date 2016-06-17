exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('username');
    table.string('password');
    table.string('user_type');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
