const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');


sessions.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
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

sessions.get('/', (req, res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});

//User show ejs
sessions.get('/:id', (req,res) => {
    // console.log(req.session.currentUser)
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        res.render('sessions/show.ejs', {
            user: foundUser,
        });
    });
});

//User INFO edit ejs
sessions.get('/:id/edit', (req,res) => {
    // console.log(req.session.currentUser)
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        res.render('sessions/edit.ejs', {
            user: foundUser,
        });
    });
});

sessions.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.session.currentUser._id, req.body, {new:true}, (err, updateUser) => {
        if(err) {
            console.log(err.message);
        } else {
            res.redirect('/sessions/'+req.session.currentUser._id);
        }
    })
})

//User Delete Account and end session (FOR FUTURE: TO CHANGE WHEN HAVE MULTIPLE USERS - ADMIN TO SEE ALL USERS & DELETE)
sessions.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.session.currentUser._id, (err, data) => {
        req.session.destroy(() => {
            res.redirect('/');
        });
    });
});


// apps.delete('/:id',isAuthenticated, (req,res) => {
//     Tools.findByIdAndRemove(req.params.id, (err, data) => {
//         res.redirect('/apps/list');
//     });
// });



//User logout/delete session
sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});



module.exports = sessions;