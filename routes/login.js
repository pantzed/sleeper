'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

/* GET users listing. */

router.post('/', (req, res, next) => {
    let user = null;

    knex('users')
        .where('username', req.body.username)
        .then((userArr) => {
            if (userArr.length !== 1) {
                let usernameDoesntExist = new Error('Username does not exist!');
                return Promise.reject(usernameDoesntExist);
            } else {
                user = userArr[0];
                let hashedPassword = user.password;       
                return bcrypt.compare(req.body.password, hashedPassword);
            }
        })
        .then((result) => {
            if (result) {
                console.log(user.id);
                return knex('users')
                        .join('teams', 'users.id', 'teams.user')
                        .select(
                            'users.admin as admin', 'users.first as first', 'users.last as last', 
                            'teams.team_name as team_name', 'teams.user as user', 'teams.id as team_id')
                        .where('user', '=', user.id)
                        .then((userData) => {
                            res.send(userData);
                        });
            } else {
                let passwordIsIncorrect = new Error('Password is incorrect! Please Try Again.');
                return Promise.reject(passwordIsIncorrect);
            }
        })
        .catch(function (error) {
            res.status(500).send({
                error: error.message
            })
        })
});



module.exports = router;