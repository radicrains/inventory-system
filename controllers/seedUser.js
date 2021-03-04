const express = require('express');
const seed = express.Router();

const Users = require('../models/users.js');

seed.get('/', (req,res) => {
    Users.create([
        {
            username: 'john',
            password: 123,
        },
        {
            username: 'jane',
            password: 123,
        },
        {
            username: 'harry',
            password: 123,
        },
        {
            username: 'sally',
            password: 123,
        },
        {
            username: 'super',
            password: 123,
            role: 'admin'
        },
        
        
        
    ], (err, data) => {
        res.redirect('/apps');
    });
});

module.exports = seed;