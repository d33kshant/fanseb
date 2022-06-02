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

const updateProduct = async (req, res) => {
	const {
		id,
		name,
		category,
		original_price,
		selling_price,
	} = req.body

	try {
		// TODO: check if creater is updating the product
		await Product.findOneAndUpdate({ _id: id }, {
			name,
			category,
			original_price,
			selling_price,
		})
		res.json({
			message: "Product has been updated."
		})
	} catch (error) {
		res.json({
			error: "Something went wrong."
		})
	}
}

const getProducts = async (req, res) => {
	const id = req.query.id || ""
	const creator = req.query.c || ""

	const filter = id ? { _id: id } : { creator }

	try {
		const products = await Product.find(filter)
		res.json(products)
	} catch (error) {
		res.json({
			error: "Something went wrong."
		})
	}
}

module.exports = {
	addProduct,
	getProducts,
	updateProduct,
}