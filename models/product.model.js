const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	brand: String,
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	instruction: String,
	usage: String,
	price: {
		type: Number,
		required: true,
	},
	discount: Number,
	specification: String,
	availableStock: Number,
	images: String,
})

module.exports = mongoose.model('product', ProductSchema)