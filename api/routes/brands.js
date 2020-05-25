const router = require('express').Router()

const {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand
} = require('../controllers/brands.controller')

router.post('/', createBrand)
router.get('/', getAllBrands)
router.get('/:id', getBrandById)
router.put('/:id', updateBrand)
router.delete('/:id', deleteBrand)

module.exports = router
