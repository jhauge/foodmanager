/**
 * Module dependencies.
 */

/* global require, process, __dirname, console */

var express = require('express');
var routes = require('./routes/routes.js');
var apiRoutes = require('./routes/apiRoutes.js');
var http = require('http');
var path = require('path');
var nconf = require('nconf');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// config
nconf.env()
     .file({file: 'config.json'});

// routes
routes.createRoutes(app);
apiRoutes.createRoutes(app);

http.createServer(app).listen(app.get('port'), function(){
    'use strict';
    console.log('Express server listening on port ' + app.get('port'));
});
