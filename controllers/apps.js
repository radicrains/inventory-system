const express = require('express');
const apps = express.Router();

const Tools = require('../models/tools.js');


apps.get('/', (req, res)=>{
    if(req.session.currentUser){
        res.render('apps/index.ejs');
    } else {
        res.redirect('/sessions/new');
    }
});


//CREATE A FORM FOR ADDING IN NEW TOOL
apps.get('/add', (req, res) => {
    res.render('apps/add/new.ejs');
});

apps.post('/list', (req,res) => {
    Tools.create(req.body, (error, createTool) => {
        res.redirect('/apps');
    });
});


// CREATE INDEX ROUTE
apps.get('/list', (req, res) => {
    Tools.find({}, (error, allTools) => {
        res.render('apps/alltools/index.ejs', {
            tools: allTools
        });
    });
});

module.exports = apps;