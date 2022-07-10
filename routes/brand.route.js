const router = require('express').Router()
const { addBrand, updateBrand, getBrands, deleteBrand } = require('../controllers/brand.controller');


router.post('/', addBrand)
router.get('/:id', getBrands)
router.put('/:id', updateBrand)
router.delete('/:id', deleteBrand)

module.exports = router