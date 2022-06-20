const mongoose = require('mongoose');
const { Schema } = mongoose;

const CrestorsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    domain: {
        type: String,
        required: true
    },
    instagramusername: {
        type: String
    },
    instagramcount: {
        type: Number
    },
    youtubeusername: {
        type: String
    },
    youtubecount: {
        type: Number
    },
    facebookusername: {
        type: String
    },
    facebookcount: {
        type: Number
    },
    twitterusername: {
        type: String
    },
    twittercount: {
        type: Number
    },
    avatar: String,
})

module.exports = mongoose.model('creators', CrestorsSchema);