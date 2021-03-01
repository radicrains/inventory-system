const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});

sessions.get('/', (req, res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});

sessions.post('/', (req, res) => {
    // console.log(req.body)
    User.findOne({username: req.body.username}, (err, foundUser) => {
        //if db  error handle the db error
        if(err) {
            console.log(err);
            res.send(`oops! something went wrong`);
        } else if (!foundUser) {
            res.render('sessions/invalid.ejs');
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.redirect('/');
            } else {
                //if passwords don't match, handle the error
                res.render('sessions/invalid.ejs');
            };
        };
    });
});

sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});



module.exports = sessions;