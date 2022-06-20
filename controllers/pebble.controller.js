const Pebble = require('../models/pebble.model')
const Creator = require('../models/creator.model')
const Product = require('../models/product.model')

const getPebble = async (req, res) => {
	const id = req.params.id || ""
	const creator = req.query.creator || ""

	if (id) {
		const pebble = await Pebble.findById(id)
		if (!pebble) return res.json({ error: "Pebble not found." })
		const creator = await Creator.findById(pebble.creator)
		pebble.creator = { avatar: creator.avatar, name: creator.name }
		for (const i in pebble.products) {
			const product = await Product.findById(pebble.products[i]);
			pebble.products[i] = product
		}
		res.json(pebble)
	} else if (creator) {
		const pebbles = await Pebble.find({ creator })
		const _creator = await Creator.findById(creator)
		for (const i in pebbles) {
			pebbles[i]._doc.creator = { avatar: _creator.avatar || '/avatar.png', name: _creator.name }
		}
		if (pebbles) {
			delete pebbles.products
			res.json(pebbles)
		} else res.json({ error: "Pebble not found." })
	} else res.json({ error: "Missing id or creator in query." })
}

// Create new pebble
const createPebble = async (req, res) => {

	const title = req.body.title
	const description = req.body.description
	const creator = req.body.creator
	const video_url = req.body.video_url
	const products = req.body.products || []

	try {
		const pebble = new Pebble({
			title,
			description,
			creator,
			video_url,
			created_on,
			products
		})
		await pebble.save()
		res.json({
			message: "New pebble is created.",
			pebble
		})
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error
		})
	}
}

module.exports = {
	getPebble,
	createPebble,
}