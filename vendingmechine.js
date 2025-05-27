const db = require('./db/db');  // path to your db.js file
var express = require('express');
var path = require('path');
const https = require("https");
var ejs = require('ejs');
var sweetalert2 = require('sweetalert2');
var bodyParser = require('body-parser');
var fs = require('fs');
/*var models=require('./models');*/
var fileUpload=require('express-fileupload');
var expressValidator = require('express-validator');

var app = express();

//app.use(expressValidator());
var nodemailer = require('nodemailer');
console.log("Tst");
var crypto=require('crypto');
var http = require('http').createServer(app);

//Comment when you are in Localhost//

    // const options = {
    //     key: fs.readFileSync("/home/vending1/public_html/ssl/private.key"),
    //     ca: fs.readFileSync("/home/vending1/public_html/ssl/bundle.pem"),
    //     cert: fs.readFileSync("/home/vending1/public_html/ssl/ven.pem")
    //     };
                         

var session = require('express-session');
app.use(session({
    secret: 'hellonodejs',
    resave: false,
    saveUninitialized: false
  }));  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(fileUpload());
var flash = require('connect-flash');
app.use(flash());

require('./routes/routes')(app);
require('./routes/website_routes')(app);
//require('./socket')(io);

app.set('views',path.join(__dirname,'view'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


// Un Comment when Your are in Localhost
http.listen(5001, () => console.log('****** Vending Mechine app listening on port 5001! ********'));


//Comment when Your are in Localhost
// https.createServer({
//     key: fs.readFileSync("/home/vending1/public_html/ssl/private.key"),
//     ca: fs.readFileSync("/home/vending1/public_html/ssl/bundle.pem"),
//     cert: fs.readFileSync("/home/vending1/public_html/ssl/ven.pem")
//   }, app)
//   .listen(5001, function () {
//     console.log('Vending Machine app Run on 5001');
//   });

