const express = require('express');
const apps = express.Router();

const Tools = require('../models/tools.js');
const User = require('../models/users.js');
const seedToolsController = require('./seedTools.js');
const seedUserController = require('./seedUser.js');


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
    // if(req.session.currentUser){
        User.findById(req.session.currentUser._id, (err, foundUser) => {
            res.render('apps/dashboard.ejs', {
                user: foundUser,
            });
        });
    // } else {
        // res.redirect('/sessions/new');
    // }
});


//User Routes via Controller
apps.use('/seedTools', seedToolsController);
apps.use('/seedUsers', seedUserController);


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


// INDEX ROUTE
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
            res.render('apps/order.ejs', {
                tools: orderTool,
                user: foundUser,
            });
        });
    });
})

//RE-STOCK FORM
apps.get('/orderForm/:id', isAuthenticated, (req, res) => {
    User.findById(req.session.currentUser._id, (err, foundUser) => {
        Tools.findById(req.params.id, (err,foundTool) => {
            res.render('apps/restock.ejs', {
                tools: foundTool,
                user: foundUser,
            });
        });
    });
});

apps.post('/orderForm/:id', (req,res) => {
    Tools.findByIdAndUpdate(req.params.id, {$inc: {qty: +5}},{new:true}, (err, updateToolQty) => {
        if(err) {
            console.log(err.message);
        } else {
            res.redirect('/apps/orderForm/'+req.params.id);
        }
    });
});




//CREATE DELETE ROUTE
apps.delete('/:id', (req,res) => {
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

apps.put('/:id', (req, res) => {
    Tools.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateTool) => {
        if(err) {
            console.log(err.message);
        } else {
            res.redirect('/apps/'+req.params.id);
        }
    });
});


//RESTOCK 
// apps.get('/:id/restock', isAuthenticated, (req, res) => {
//     User.findById(req.session.currentUser._id, (err, foundUser) => {
//         Tools.findById(req.params.id, (err,foundTool) => {
//             res.render('apps/restock.ejs', {
//                 tools: foundTool,
//                 user: foundUser,
//             });
//         });
//     });
    
// });

// apps.post('/:id/restock', (req,res) => {
//     Tools.findByIdAndUpdate(req.params.id, {$inc: {qty: +5}},{new:true}, (err, updateToolQty) => {
//         if(err) {
//             console.log(err.message);
//         } else {
//             res.redirect('/apps/orderForm');
//         }
//     });
// });




// //CHECKOUT
// apps.post('/:id', (req,res) => {
//     Tools.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}},{new:true}, (err, updateToolQty) => {
//         if(err) {
//             console.log(err.message);
//         } else {
//             res.redirect('/apps/'+req.params.id);
//         }
//     });
// });

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

//CHECKOUT
apps.post('/:id', (req,res) => {
    Tools.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}},{new:true}, (err, updateToolQty) => {
        if(err) {
            console.log(err.message);
        } else {
            res.redirect('/apps/'+req.params.id);
        }
    });
});

module.exports = apps;