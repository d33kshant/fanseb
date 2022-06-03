const router = require('express').Router()
const { createCollection, deleteCollection } = require('../controllers/collection.controller')

router.get('/')
router.post('/', createCollection)
router.delete('/', deleteCollection)

module.exports = router