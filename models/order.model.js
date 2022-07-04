const mongoose = require('mongoose')
const OrderSchema = new mongoose.Schema({
	order_detail: {
		first_name: String,
		last_name: String,
		address: String,
		apt_suite: String,
		city: String,
		postal: String,
	},
	order_items: [{
		id: String,
		count: Number,
		selling_price: Number,
	}],
	payment_data: {
		id: String,
		amount: Number,
		currency: String,
	}
}, { strict: false })
module.exports = mongoose.model('order', OrderSchema)