const router = require('express').Router()
const { getProducts, addProduct, updateProduct, likeProduct } = require('../controllers/product.controller')

router.get('/', getProducts)
router.put('/', updateProduct)
router.post('/', addProduct)
router.post('/like', likeProduct)

module.exports = router