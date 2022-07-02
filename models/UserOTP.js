const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserOTPSchema = new Schema({
	userID: mongoose.Schema.Types.ObjectId,
	otp: String,
	createdAt: Date,
	expiresAt: Date
})

module.exports = mongoose.model('userOTP', UserOTPSchema);