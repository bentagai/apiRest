const BrandModel = require('../models/brands.model')
const { handleError } = require('../utils')

module.exports = {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand
}

function createBrand (req, res) {
  const newBrand = req.body
  BrandModel.create(newBrand)
    .then(response => (res.json(response)))
    .catch((err) => handleError(err, res))
}

function getAllBrands (req, res) {
  BrandModel.find()
    .then(response => (res.json(response)))
    .catch((err) => handleError(err, res))
}

function getBrandById (req, res) {
  const brandId = req.params.id
  BrandModel.findById(brandId)
    .then(response => (res.json(response)))
    .catch((err) => handleError(err, res))
}

function updateBrand (req, res) {
  const id = req.params.id
  BrandModel.findByIdAndUpdate(id, req.body)
    .then(response => (res.json(response)))
    .catch((err) => handleError(err, res))
}

function deleteBrand (req, res) {
  const brandId = req.params.id
  BrandModel.findByIdAndDelete(brandId)
    .then(response => (res.json(response)))
    .catch((err) => handleError(err, res))
}
