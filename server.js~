var express = require('express');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var fs=require('fs-extra');
var util= require('util');
// create express app
const storage =require('node-persist');
var app = express();
var session = require('express-session');
var passport = require('passport');
var path=require('path');
var cors = require('cors');
app.use(cors());

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('method-override')());

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://admin:1234@ds263759.mlab.com:63759/easy-notes");

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://glacial-cliffs-69621.herokuapp.com/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

storage.init({
  dir: 'data',
  stringify: JSON.stringify,
  parse: JSON.parse,
  encoding: 'utf8',
}).then(() => {
  console.log('storage initialized');
}).catch((e) => {
  console.log('storage initialization failed');
  console.error(e);
});

app.use(express.static('client/build'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.get('/content', (req, res) => {
  storage.getItem('content', (err, val) => {
    res.json(val || null);
  });
});

app.post('/content', (req, res) => {
  storage.setItem('content', req.body.content, (err, val) => {
    res.json({ok: true});
  });
});




// define a simple route
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

require('./app/routes/user.routes.js')(app);
require('./app/routes/note.routes.js')(app);
require('./config/passport');




app.listen(process.env.PORT || 5000, function(){
    console.log("Server is listening on port 5000");
});
	
