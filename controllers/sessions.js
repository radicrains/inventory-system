const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');

sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});

sessions.get('/', (req, res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});

sessions.post('/', (req, res) => {
    console.log(req.body)
    User.findOne({username: req.body.username}, (err, foundUser) => {
        //if db  error handle the db error
        if(err) {
            console.log(err);
            res.send(`oops! something went wrong`);
        } else if (!foundUser) {
            res.send(`user not found!`);
        } else {
            if(req.body.password == foundUser.password) {
                req.session.currentUser = foundUser
                res.redirect('/');
            } else {
                //if passwords don't match, handle the error
                res.send('<a href="/">wrong password</a>');
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