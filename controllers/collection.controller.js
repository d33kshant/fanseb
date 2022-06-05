const Collection = require('../models/collection.model')

const createCollection = async (req, res) => {
	// TODO: replace req.body.user with req.user once auth is done
	const user = req.body.user
	const { name, image, products } = req.body

	try {
		const collection = new Collection({
			name,
			image,
			products,
			creator: user.id
		})
		await collection.save()
		res.json({
			message: "New collection hsa been created.",
			collection: collection._id
		})
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error
		})
	}
}

const deleteCollection = async (req, res) => {
	const { id } = req.body
	try {
		const collection = await Collection.findByIdAndDelete(id)
		res.json({
			message: "Collection has been deleted",
			payload: collection
		})
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error
		})
	}
}

const addProductInCollection = async (req, res) => {
	const { collection_id } = req.body.collection
	const { product_id } = req.body.product

	try {
		const collection = await Collection.findById(collection_id)
		if (collection) {
			if (collection.products.indexOf(product_id) === -1) {
				collection.products.push(product_id)
				await collection.save()
				res.json({
					message: "New product has been added to your collection."
				})
			} else {
				res.json({
					error: "Product already exist in your collection."
				})
			}
		} else {
			res.json({
				error: "Collection not found."
			})
		}
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error,
		})
	}
}

const removeProductFromCollection = async (req, res) => {
	const { collection_id } = req.body.collection
	const { product_id } = req.body.product

	try {
		const collection = await Collection.findById(collection_id)
		if (collection) {
			if (collection.products.indexOf() !== -1) {
				collection.products = collection.products.filter(product => product !== product_id)
				await collection.save()
				res.json({
					message: "Product has been removed from your collection."
				})
			} else {
				res.json({
					error: "Product already removed or does not exist in your collection."
				})
			}
		} else {
			res.json({
				error: "Collection not found."
			})
		}
	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error,
		})
	}
}

module.exports = {
	createCollection,
	deleteCollection,
	addProductInCollection,
	removeProductFromCollection,
}