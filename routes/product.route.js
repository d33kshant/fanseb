const router = require('express').Router()
const { getProducts, addProduct, updateProduct, likeProduct, deleteProduct } = require('../controllers/product.controller');


router.get('/', getProducts)
router.put('/:id', updateProduct)
router.post('/', addProduct)
// router.delete('/:id', deleteProduct)
router.post('/like', likeProduct)

module.exports = router