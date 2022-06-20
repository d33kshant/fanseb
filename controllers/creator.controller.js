const Creator = require('../models/creator.model')
const router = require('express').Router()

router.get('/:id', async (req, res) => {
	const creator = await Creator.findById(req.params.id)
	res.json(creator)
})

module.exports = router