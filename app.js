var express = require('express');
var path = require('path');
var cors = require('cors');

const publicRoutes = require('./src/routesPublic');

var config = require('config');

var whitelist = ['http://localhost:4200']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(null, true)
        }
    }
}

var app = express();

app.use(express.json());

app.use(cors(corsOptions))

app.use('/public', publicRoutes);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

console.log("running at http://localhost:3000")

module.exports = app;
