const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    liked_products: [String],
})

module.exports = mongoose.model('users', UsersSchema);