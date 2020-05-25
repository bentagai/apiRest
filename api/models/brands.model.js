const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
  brand: String,
  country: String
})

const brandModel = mongoose.model('brand', brandSchema)
module.exports = brandModel
