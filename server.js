
import bodyParser from 'body-parser';
import path from 'path'
import express from 'express';
import * as mysql from 'mysql'
import { login } from './backend/login.js'
import { signup } from './backend/signup.js'
var app = express()


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('html'));


var connection = mysql.createConnection({
    host: "localhost",
    user: "antonis",
    password: "antonis",
    database: "web"
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


login(app,connection,path);

signup(app,connection);

