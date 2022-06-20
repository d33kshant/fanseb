const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	creator: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	original_price: {
		type: Number,
		required: true,
	},
	selling_price: {
		type: Number,
		required: true,
	},
	images: String,
})

module.exports = mongoose.model('product', ProductSchema)