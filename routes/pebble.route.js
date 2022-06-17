const router = require('express').Router()
const { getPebble } = require('../controllers/pebble.controller')

router.get('/', getPebble)

module.exports = router