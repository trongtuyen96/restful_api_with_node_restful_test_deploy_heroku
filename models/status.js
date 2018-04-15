// denpendencies
var restful = require('node-restful')
var mongoose = restful.mongoose

// Schema
var statusSchema = mongoose.Schema({
  fbname: String,
  content: String,
  likes: Number,
  comments: Number
})

// return models
module.exports = restful.model('tblstatus', statusSchema)
