const Product = require("../models/product.model")

const addProduct = async (req, res) => {
	const {
		name,
		original_price,
		selling_price,
		image_url,
	} = req.body

	try {
		const product = new Product({
			name,
			original_price,
			selling_price,
			image_url,
		})
		await product.save()
		res.json({
			message: "New product in added."
		})
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error
		})
	}
}

module.exports = {
	addProduct,
}