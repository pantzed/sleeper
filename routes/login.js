'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

/* GET users listing. */

router.post('/', (req, res, next) => {
    let currentUser = null;

    knex('users')
        .where('username', req.body.username)
        .then((userArr) => {
            if (userArr.length !== 1) {
                let usernameDoesntExist = new Error('Username does not exist!');
                return Promise.reject(usernameDoesntExist);
            } else {
                currentUser = userArr[0];
                let hashedPassword = currentUser.password;       
                return bcrypt.compare(req.body.password, hashedPassword);
            }
        })
        .then((result) => {
            if (result) {
                res.send(currentUser);
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