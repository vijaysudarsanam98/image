const knex = require("knex");
module.exports = {

 

  development: {
    client: 'postgresql',
    connection: {
      database: 'upload',
      user:     'postgres',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      
    }
  },

  

};