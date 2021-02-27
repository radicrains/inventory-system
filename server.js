//APP DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//MODELS / ROUTES CONTROLLERS
const userController = require('./controllers/users.js');
const sessionsController = require('./controllers/sessions.js');
const appsController = require('./controllers/apps.js');

//CONFIGURATION
const port = process.env.PORT || 5000;
const mongoURI = process.env.mongoURL;


//MIDDLEWARE
app.use('/public',express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));

//DATABASE
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {console.log(`connected to Mongo`)});
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', mongoURI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));


//iDiDit Main Home Page
app.get('/', (req,res) => {
    // res.send(`welcome to iDiDit, this is the home page`);
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
});

//User Routes via Controller
app.use('/users', userController);
app.use('/sessions', sessionsController);
app.use('/apps', appsController);


app.listen(port, () => {
    console.log(`IMS starting, listening at: ${port}`);
});