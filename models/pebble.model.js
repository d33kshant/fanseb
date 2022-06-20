const mongoose = require('mongoose');
const { Schema } = mongoose;

const PebbleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	creator: {
		type: String,
		required: true,
	},
	video_url: {
		type: String,
		required: true,
	},
	created_on: {
		type: Date,
		default: Date.now,
	},
	products: [String],
	image: String,
	timestamp: String
})

module.exports = mongoose.model('pebble', PebbleSchema)