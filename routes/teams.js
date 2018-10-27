'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);


router.get('/', (req, res) => {
  knex('teams')
  .then((data) => {
    res.send(data);
  })
});

router.get('/:id', (req, res) => {
  knex('teams')
  .join('users', 'users.id', 'teams.user')
  .select('users.first', 'users.last', 'users.id as user_id',
          'teams.team_name', 'teams.id as team_id')
  .where('teams.id', req.params.id)
  .then((team) => {
    res.send(team);
  });
});

module.exports = router;