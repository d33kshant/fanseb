const Product = require('../models/product.model')
const Creator = require('../models/creator.model')
const Collection = require('../models/collection.model')
const Pebble = require('../models/pebble.model')
const Order = require('../models/order.model')

const router = require('express').Router()

// Get Available Products
router.get('/product', async (req, res) => {
	try {
		const products = await Product.find({})
		res.json(products)
	} catch (error) {
		res.json({ error: error })
	}
})

// Get Prodcut by Id
router.get('/product/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		res.json(product)
	} catch (error) {
		res.json({ error })
	}
})

// Create new product
router.post('/product', async (req, res) => {
	try {
		const product = await Product.create({ ...req.body })
		res.json(product)
	} catch (error) {
		res.json({ error })
	}
})

// Delete product by its id
router.delete('/product/:id', async (req, res) => {
	try {
		const product = await Product.findOneAndDelete({ _id: req.params.id })
		res.json(product)
	} catch (error) {
		res.json({ error })
	}
})

// Update product by its id
router.put('/product/:id', async (req, res) => {
	try {
		const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { strict: false })
		res.json(product)
	} catch (error) {
		res.json({ error })
	}
})

// Get all Creators
router.get('/creator', async (req, res) => {
	try {
		const creators = await Creator.find({})
		res.json(creators)
	} catch (error) {
		res.json({ error: error })
	}
})

// Get Creator by id
router.get('/creator/:id', async (req, res) => {
	try {
		const creator = await Creator.findById(req.params.id)
		res.json(creator)
	} catch (error) {
		res.json({ error })
	}
})

// Create new creator
router.post('/creator/:id', async (req, res) => {
	try {
		const creator = await Creator.create({ ...req.body })
		res.json(creator)
	} catch (error) {
		res.json({ error })
	}
})

// Delete creator by id
router.delete('/creator/:id', async (req, res) => {
	try {
		const creator = await Creator.findOneAndDelete({ _id: req.params.id })
		res.json(creator)
	} catch (error) {
		res.json({ error })
	}
})

// Update creator by its id
router.put('/creator/:id', async (req, res) => {
	try {
		const creator = await Creator.findOneAndUpdate({ _id: req.params.id }, req.body, { strict: false })
		res.json(creator)
	} catch (error) {
		res.json({ error })
	}
})

// Get All Collection
router.get('/collection', async (req, res) => {
	try {
		const collections = await Collection.find({})
		res.json(collections)
	} catch (error) {
		res.json({ error: error })
	}
})

// Get collection by id
router.get('/collection/:id', async (req, res) => {
	try {
		const collection = await Collection.findById(req.params.id)
		res.json(collection)
	} catch (error) {
		res.json({ error })
	}
})


// Create new collecion
router.post('/collection/:id', async (req, res) => {
	try {
		const collection = await Collection.create({ ...req.body })
		res.json(collection)
	} catch (error) {
		res.json({ error })
	}
})

// Delete collection by id
router.delete('/collection/:id', async (req, res) => {
	try {
		const collection = await Collection.findOneAndDelete({ _id: req.params.id })
		res.json(collection)
	} catch (error) {
		res.json({ error })
	}
})

// Update collecion by id
router.put('/collection/:id', async (req, res) => {
	try {
		const collection = await Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { strict: false })
		res.json(collection)
	} catch (error) {
		res.json({ error })
	}
})

// Get all orders
router.get('/order', async (req, res) => {
	try {
		const orders = await Order.find({})
		res.json(orders)
	} catch (error) {
		res.json({ error: error })
	}
})

// Get order by id
router.get('/order/:id', async (req, res) => {
	try {
		const order = await Order.findById(req.params.id)
		res.json(order)
	} catch (error) {
		res.json({ error })
	}
})

// Delete an order by id
router.delete('/order/:id', async (req, res) => {
	try {
		const order = await Order.findOneAndDelete({ _id: req.params.id })
		res.json(order)
	} catch (error) {
		res.json({ error })
	}
})

/// Update order by id
router.put('/order/:id', async (req, res) => {
	try {
		const order = await Order.findOneAndUpdate({ _id: req.params.id }, req.body, { strict: false })
		res.json(order)
	} catch (error) {
		res.json({ error })
	}
})

// Get all Pebbles
router.get('/pebble', async (req, res) => {
	try {
		const pebbles = await Pebble.find({})
		res.json(pebbles)
	} catch (error) {
		res.json({ error: error })
	}
})

// Get Pebble by id
router.get('/pebble/:id', async (req, res) => {
	try {
		const pebble = await Pebble.findById(req.params.id)
		res.json(pebble)
	} catch (error) {
		res.json({ error })
	}
})

// Create new pebble
router.post('/pebble/:id', async (req, res) => {
	try {
		const pebble = await Pebble.create({ ...req.body })
		res.json(pebble)
	} catch (error) {
		res.json({ error })
	}
})

// Delete pebble by id
router.delete('/pebble/:id', async (req, res) => {
	try {
		const pebble = await Pebble.findOneAndDelete({ _id: req.params.id })
		res.json(pebble)
	} catch (error) {
		res.json({ error })
	}
})

// Update pebble by id
router.put('/pebble/:id', async (req, res) => {
	try {
		const pebble = await Pebble.findOneAndUpdate({ _id: req.params.id }, req.body, { strict: false })
		res.json(pebble)
	} catch (error) {
		res.json({ error })
	}
})

module.exports = router