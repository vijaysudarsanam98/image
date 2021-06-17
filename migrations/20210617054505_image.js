const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('image', function(table) {

        table.increments('id');
        table.text('filename')
        table.text('filepath')
        table.text('mimetype')
        table.bigint('size')
        table.integer('user_id').references('id').inTable('users')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

    exports.down = function(knex,Promise) {
        return knex.schema.dropTable('image');
      
    };
    
