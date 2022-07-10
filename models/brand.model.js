const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    brandName: {
        type: String,
        // required: true,
    },
    category: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    tags: String,
    specification: String,
    image: String,
    thumbnail: String,
})

module.exports = mongoose.model('brand', BrandSchema)