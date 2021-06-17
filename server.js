const express = require('express')
const bodyParser = require('body-parser');
const app = express();
let port = process.env.PORT || 5000;
const Joi = require('joi');


//const morgan = require('morgan');




app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// Set middlewares
app.use(express.json());
//app.use(morgan('dev'));

 //initiate user controller
let users = require('./controllers/users');
app.use('/users', users);

let image = require('./controllers/image');
app.use('/image', image);

  



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })