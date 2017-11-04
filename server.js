//requisites
//-server setup
var express = require('express');
var app = express();
var port = 8080;

var handlebars = require('express-handlebars');
var override = require('method-override');
var body_parser = require('body-parser');
//sql setup
var sql = require('mysql');

// handlebars setup

app.engine('handlebars', handlebars({defaultLayout: 'main.handlebars'}));
app.set('view engine', 'handlebars');

burger => this.name;

app.get('*/', function(req, res){
    res.render('isc', {isc: burger});
});

//server connection set
app.listen(port);
console.log('listening to port '+ port);