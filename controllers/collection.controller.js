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

module.exports = {
	createCollection
}