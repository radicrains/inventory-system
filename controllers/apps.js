const express = require('express');
const apps = express.Router();

const Tools = require('../models/tools.js');


apps.get('/', (req, res)=>{
    if(req.session.currentUser){
        res.render('apps/dashboard.ejs');
    } else {
        res.redirect('/sessions/new');
    }
});


//CREATE A FORM FOR ADDING IN NEW TOOL
apps.get('/add', (req, res) => {
    res.render('apps/new.ejs');
});

apps.post('/list', (req,res) => {
    Tools.create(req.body, (err, createTool) => {
        res.redirect('/apps');
    });
});


// CREATE INDEX ROUTE
apps.get('/list', (req, res) => {
    Tools.find({}, (err, allTools) => {
        res.render('apps/index.ejs', {
            tools: allTools
        });
    });
});


// CREATE SHOW ROUTE
apps.get('/:id', (req, res) => {
    Tools.findById(req.params.id, (err, foundTool) => {
        res.render('apps/show.ejs', {
            tools: foundTool,
        });
    });
});

//CREATE DELETE ROUTE
apps.delete('/:id',(req,res) => {
    Tools.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/apps/list');
    });
});

//CREATE EDIT ROUTE
apps.get('/:id/edit', (req, res) => {
    Tools.findById(req.params.id, (err,foundTool) => {
        res.render('apps/edit.ejs', {
            tools: foundTool,
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

module.exports = apps;