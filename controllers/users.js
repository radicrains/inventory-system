const express = require('express');
const users = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

users.get('/new', (req, res) => {
    res.render('users/new.ejs');
});

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
        if (err) {
            console.log(err);
        }
        console.log(createdUser);
        res.redirect('/');
    });
});

//TO SHOW ALL USERS
users.get('/all', (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        User.find({}, (err, allUsers) => {
        
            res.render('users/show.ejs', {
                user: foundUser,
                users: allUsers,
            });
        });
    })
});

//TO EDIT USER
users.get('/:id/edit', (req,res) => {
    User.findById(req.session.currentUser._id, (err, sessionUser) => {
        User.findById(req.params.id, (err, editUser) => {
            res.render('users/edit.ejs', {
                user: sessionUser,
                founduser: editUser,
            });
        });
    });
});


users.put('/:id', (req,res) => {
    // User.findById(req.session.currentUser._id, (err, sessionUser) => {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editUser) => {
            if(err) {
                console.log(err.message);
            } else {
                res.redirect('/users/all');
            }
        });
    // });
});


// TO EDIT USER PASSWORD
users.get('/:id/edit/password', (req,res) => {
    User.findById(req.session.currentUser._id, (err, sessionUser) => {
        User.findById(req.params.id, (err, editUser) => {
            res.render('users/password.ejs', {
                user: sessionUser,
                founduser: editUser,
            });
        });
    });
});


users.put('/:id', (req,res) => {
    // User.findById(req.session.currentUser._id, (err, sessionUser) => {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, editUser) => {
            if(err) {
                console.log(err.message);
            } else {
                res.redirect('/users/all');
            }
        });
    // });
});


//TO DELETE USER
users.delete('/:id', (req,res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/users/all');
    });
});



module.exports = users;