const Pebble = require('../models/Pebble')
const Product = require('../models/product.model')

const getPebbleById = async (req, res) => {
	const id = req.params.id

	try {
		const pebble = await Pebble.findById(id)
		for (const i in pebble.products) {
			const product = await Product.findById(pebble.products[i]);
			pebble.products[i] = product
		}
		pebble ? res.json(pebble) : res.json({ error: "Pebble not found." })
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error
		})
	}
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
	getPebbleById,
	createPebble,
}