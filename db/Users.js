var knex = require('./knex');

module.exports={
    getOneByEmail: function (email) {
        return knex('users').where('email',email).first();
    },

    getOneById: function (id) {
        return knex('users').where('id',id).first();
    },

    

    delete:function(id) {
        return knex('users').where('id',id).del()
    },

    getOne: function (id) {
        return knex('users').where('id', id).first();
      },

      update: function (id,users) {
        return knex('users').where('id', id).update(users,'*')
      },

      createalter(users) {
        return knex('users').insert(users, '*');
      }
      
    
    

}

 