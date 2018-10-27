'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/:username', (req, res) => {
  knex('users').where('username', req.body.username)
  .then((users) => {
    res.send(users);
  })
})

module.exports = router;
