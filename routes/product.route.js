const router = require('express').Router()
const { getProducts, addProduct, updateProduct } = require('../controllers/product.controller')

router.get('/', getProducts)
router.put('/', updateProduct)
router.post('/', addProduct)

module.exports = router