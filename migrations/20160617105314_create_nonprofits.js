exports.up = function(knex, Promise) {
  return knex.schema.createTable('nonprofits', function(table){
    table.increments();
    table.string('name');
    table.string('location');
    table.string('category');
    table.string('contact_user_id');
    table.string('phone');
    table.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nonprofits');
};
