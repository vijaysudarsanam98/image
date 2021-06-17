
var knex = require('./knex');

module.exports={
//     create:function (tournament) {
//         return knex('tournament').insert(tournament,'id').then(ids=>{
//             return ids[0];
//         })
        


update: function (id,tournament) {
    return knex('users').where('id', id).update(tournament,'*')
  },
  getOneById: function (id) {
    return knex('image').where('id',id).first();
},
delete:function(id) {
    return knex('image').where('id',id).del()
}

}