const Brand = require("../models/brand.model")
const User = require("../models/user.model")

// add new brand
const addBrand = async (req, res) => {
    const {
        brandName, description, category, tags, image, thumbnail, specification
    } = req.body

    try {
        const Brand = new Brand({
            brandName, description, category, tags, image, thumbnail, specification
        })
        console.log(Brand.name);
        await Brand.save()

        res.json({
            message: "New Brand is added."
        })
    } catch (error) {
        res.json({
            error: "Something went wrong.",
            payload: error
        })
    }
}

const updateBrand = async (req, res) => {
    const {
        name,
        category,
        description,
        specification,
        image_url,
        thumbnail
    } = req.body

    try {
        // TODO: check if creater is updating the Brand
        await Brand.findByIdAndUpdate(req.params.id, {
            name,
            category,
            description,
            specification,
            image_url,
            thumbnail
        })
        res.json({
            message: "Brand has been updated."
        })
    } catch (error) {
        res.json({
            error: "Something went wrong."
        })
    }
}

//get all brand
const getBrands = async (req, res) => {
    // const userId = req.body.id
    // console.log(userId);
    try {
        const user = await User.findById(req.params.id)
        const userBrand = user.brand
        const brands = await Brand.findOne({ userBrand });
        res.send(brands)
    }
    catch (error) {
        console.log(error)
        res.json({
            error: "Something went wrong.",
            payload: error
        })
    }
}


// delete single brand
const deleteBrand = async (req, res) => {
    try {
        const result = await Brand.findByIdAndRemove(req.params.id)
        res.json({
            message: "Brand has been deleted"
        })
    } catch (error) {
        res.json({
            error: "Something went wrong."
        })
    }
}

module.exports = {
    addBrand,
    updateBrand,
    getBrands,
    deleteBrand
}