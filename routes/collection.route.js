const router = require('express').Router()
const { createCollection, deleteCollection, addProductInCollection, removeProductFromCollection } = require('../controllers/collection.controller')

router.get('/')
router.post('/', createCollection)
router.delete('/', deleteCollection)

router.post('/product', addProductInCollection)
router.delete('/product', removeProductFromCollection)

module.exports = router