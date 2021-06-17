
const Joi = require('joi');

module.exports={
    validateUser:function (user){
            const schema={
              email:Joi.string().required(),
              name:Joi.string()
              
            };
            return Joi.validate(user,schema)
            
            
              
              }
            
}