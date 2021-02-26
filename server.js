var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var login = require('./backend/login');
var signup = require('./backend/signup');
var upload = require('./backend/upload');
var app = express()


app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.static('html'));

var connection = mysql.createConnection({
    host: "localhost",
    user: "jason",
    password: "J@s0n123",
    database: "web_project"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
}); 

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)
});

app.get('/', function (request, response) {
    response.sendFile(path.join('/home/jason/Documents/Web_Project/http-traffic-analysis-app/html/signup.html'));
});

login.login(app,connection,path);
signup.signup(app,connection);
upload.upload(app,connection);

