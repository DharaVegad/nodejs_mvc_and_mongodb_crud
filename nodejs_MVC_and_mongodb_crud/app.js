
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');



var router = require('./routes/royal');


var app = express();


 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Db Connection Start 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/finaldatabase', { useNewUrlParser: true })
.then(() => console.log('connection successful'))
.catch((err) => console.error(err))



app.use('/',router);

 

module.exports = app;
app.listen('5000');