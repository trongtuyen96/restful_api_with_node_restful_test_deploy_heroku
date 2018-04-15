// dependencies
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// Connect to mongodb
mongoose.connect('mongodb://admin:password@ds059316.mlab.com:59316/node_restfull')

// express
var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// routes:
app.use('/api', require('./routes/api'))

// start server
app.listen(3000)
console.log('Server is running on 3000');
