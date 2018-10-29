'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);


function getProductivity(num) {
  const spawn = require('child_process').spawn;
  const pythonProcess = spawn('python', ["./test.py", num])
    pythonProcess.stdout.on('data', (data) => {
    return data.toString();
  });
}

router.get('/test', (req, res) => {
  const spawn = require('child_process').spawn;
  const pythonProcess = spawn('python', ["./test.py", 444])
    pythonProcess.stdout.on('data', (data) => {
    res.send(data.toString());
  });
})

router.get('/est', (req, res) => {
  res.send(getProductivity(444));
})


router.get('/', (req, res) => {
  knex('teams')
  .then((data) => {
    res.send(data);
  })
});

router.get('/:id/:date', (req, res) => {
  const date = new Date();
  knex('teams')
  .join('users', 'users.id', 'teams.user')
  .join('health_data', 'health_data.id', 'teams.user')
  .select('users.first', 'users.last', 'users.id as user_id',
          'teams.team_name', 'teams.id as team_id', 
          'health_data.sleep_duration', 'health_data.date')
  .where('teams.id', req.params.id)
  .andWhere('health_data.date', '<=', date)
  .then((team) => {
    res.send(team);
  });
});

router.post('/productivity', (req, res) => {
  let things = req.body[0].dataArray;
  let jsonThings = JSON.stringify(things);
  const spawn = require('child_process').spawn;
  const pythonProcess = spawn('python', ["./sleepCalc.py", jsonThings])
  pythonProcess.stdout.on('data', (data) => {
    res.send([data.toString()]);
    res.end();
  });
})

module.exports = router;