
const express = require('express')
const Users = require('../db/Users');
const router = express.Router();
const Joi = require('joi');
const { authencation } = require('../middleware/auth');
const userValidation = require('../validation/User')
const jwt = require('jsonwebtoken');








/// Login user ///
router.post('/api/login', async (req, res) => {

  const { error } = userValidation.validateUser(req.body);
  if (error) return res.status(400).json({ 'message': 'name or email missing' })

  let users = await Users.getOneByEmail(req.body.email)

  if (users) {
    token = jwt.sign({ id: users.id, name: users.name }, 'jwtPrivateKey');
    return res.status(200).json({ 'message': 'success', 'response_objects': { 'token': token, 'userId': users.id } })

  }
  if (!users) {
    let users = await Users.createalter(req.body)
    const token = jwt.sign({ id: users[0].id, name: users[0].name }, 'jwtPrivateKey');
    return res.status(200).json({ 'message': 'success', 'response_objects': { 'token': token, 'user_id': users[0].id } })
  }


})

module.exports = router;