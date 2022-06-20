const Product = require("../models/product.model")
const User = require("../models/user.model")

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
	const creator = req.query.creator || ""

	try {
		if (id) {
			const product = await Product.findById(id)
			product ? res.json(product) : res.json({ error: "Pebble not found." })
		} else if (creator) {
			const products = await Product.find({ creator })
			products ? res.json(products) : res.json({ error: "Pebble not found." })
		} else res.json({ error: "Missing id or creator in query." })
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error
		})
	}
}

const likeProduct = async (req, res) => {
	const user_id = "" // TODO: Get user id with auth
	const { product_id } = req.body

	try {
		const user = await User.findById(user_id)
		if (user.liked_products.indexOf(product_id) === -1) {
			user.liked_products.push(product_id)
			await user.save()
			res.json({
				message: "Product has been added to liked products"
			})
		} else {
			user.liked_products = user.liked_products.filter(product => product !== product_id)
			await user.save()
			res.json({
				message: "Product has been removed from liked products."
			})
		}
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
	likeProduct,
}