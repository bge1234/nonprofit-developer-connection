exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table){
    table.increments();
    table.string('nonprofit_id');
    table.string('developer_id');
    table.string('name');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
