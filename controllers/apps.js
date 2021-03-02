const express = require('express');
const apps = express.Router();

const Tools = require('../models/tools.js');
const User = require('../models/users.js');
const seedController = require('./seed.js');


const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new');
    }
};

// apps.get('/', isAuthenticated, (req, res)=>{
//     if(req.session.currentUser){
//         res.render('apps/dashboard.ejs');
//     } else {
//         res.redirect('/sessions/new');
//     }
// });

apps.get('/', isAuthenticated, (req, res)=>{
    if(req.session.currentUser){
        User.findById(req.session.currentUser._id, (err, foundUser) => {
            res.render('apps/dashboard.ejs', {
                user: foundUser,
            });
        });
    } else {
        res.redirect('/sessions/new');
    }
});


//User Routes via Controller
apps.use('/seed', seedController);

//CREATE A FORM FOR ADDING IN NEW TOOL
apps.get('/add', (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        res.render('apps/new.ejs', {
            user: foundUser,
        });
    });
    // res.render('apps/new.ejs');
});

apps.post('/list', (req,res) => {
    // console.log('hello');
    Tools.create(req.body, (err, createTool) => {
        // console.log(createTool)
        res.redirect('/apps');
    });
    
});


// CREATE INDEX ROUTE
apps.get('/list', isAuthenticated, (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        Tools.find({}, (err, allTools) => {
            res.render('apps/index.ejs', {
                tools: allTools,
                user: foundUser,
            });
        });
    });
    // User.findById(req.session.currentUser._id, (err, foundUser) => {
    //     res.render('apps/index.ejs', {
    //         user: foundUser,
    //     });
    // });
});

//GENERATE ORDER FORM
apps.get('/orderForm', isAuthenticated, (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        Tools.find({qty: {$lt:10}}, (err,orderTool) => {
            // console.log(orderTool);
            res.render('apps/orderForm.ejs', {
                tools: orderTool,
                user: foundUser,
            });
        });
    });
})


// CREATE SHOW ROUTE
apps.get('/:id', isAuthenticated, (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        Tools.findById(req.params.id, (err, foundTool) => {
            res.render('apps/show.ejs', {
                tools: foundTool,
                user: foundUser,
            });
        });
    });
    
});

//CREATE DELETE ROUTE
apps.delete('/:id',isAuthenticated, (req,res) => {
    Tools.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/apps/list');
    });
});

// apps.delete('/list',(req,res) => {
//     Tools.remove({}, (err, data) => {
//         res.redirect('/apps');
//     });
// });

//CREATE EDIT ROUTE
apps.get('/:id/edit', isAuthenticated, (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        Tools.findById(req.params.id, (err,foundTool) => {
            res.render('apps/edit.ejs', {
                tools: foundTool,
                user: foundUser,
            });
        });
    });
    
});

apps.put('/:id', isAuthenticated, (req, res) => {
    Tools.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateTool) => {
        if(err) {
            console.log(err.message);
        } else {
            res.redirect('/apps/'+req.params.id);
        }
    });
});

//RESTOCK 
apps.post('/:id', (req,res) => {
    Tools.findByIdAndUpdate(req.params.id, {$inc: {qty: +5}},{new:true}, (err, updateToolQty) => {
        if(err) {
            console.log(err.message);
        } else {
            res.redirect('/apps/'+req.params.id);
        }
    });
});


module.exports = apps;