//PACKAGES //
var path = require('path');
var fs = require('fs');
var express = require('express');

//Index Route
var indexRoutes = require('./routes/index');

//CREATE APP//
var app = express();

//VIEW ENGINE//
app.set('view engine','html');
app.engine('html', function (path, options, callbacks){
	fs.readFile(path, 'utf-8', callbacks);
});

app.use(express.static(path.join(__dirname,'../client')));

//ROUTES//
app.use('/',indexRoutes);

//SERVE APP//
module.exports = app;