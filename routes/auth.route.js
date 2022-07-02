const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Creator = require('../models/creator.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserOTP = require('../models/UserOTP');

const ACCOUNT_SID = process.env.ACCOUNT_SID
const TWILIO_TOKEN = process.env.TWILIO_TOKEN

const twilio = require('twilio')(ACCOUNT_SID, TWILIO_TOKEN)

const sendOtp = async (id, phonenumber) => {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`

    await twilio.messages.create({
        from: +19897474296,
        to: '+91' + phonenumber,
        body: 'Your Fanseb security code is ' + otp + '. This otp will expire in 30 minutes.'
    })

    const salt = await bcrypt.genSalt(10);
    const hashedOTP = await bcrypt.hash(otp, salt);

    const newOTPVerification = new UserOTP({
        userID: id,
        otp: hashedOTP,
        createdAt: Date.now(),
        expiresAt: Date.now() + 1800000
    })

    await newOTPVerification.save()
}

//Route Createuser
router.post('/createuser', async (req, res) => {
    const { name, phonenumber, email, dob, gender } = req.body;
    let success = false
    try {
        const _user = await User.findOne({ phonenumber })
        if (_user) return res.json({ error: "User already registred.", success })

        const user = await User.create({
            name,
            phonenumber,
            email,
            dob,
            gender
        })
        success = true
        res.json({ success });
    } catch (error) {
        res.json({
            error: "Something went wrong.",
            success
        })
    }
});
router.post('/login', async (req, res) => {
    let success = false
    try {
        const { phonenumber } = req.body
        console.log(phonenumber);
        const user = await User.findOne({ phonenumber })
        if (!user) return res.json({ error: "User doesn't exist.", success })
        sendOtp(user._id, phonenumber)

        success = true
        res.json({ msg: 'OTP sent', success, user })
    } catch (error) {
        res.json({
            error: "Something went wrong.",
            success
        })
    }
})
router.post('/verifyotp', async (req, res) => {
    let success = false
    try {
        let { userID, otp } = req.body
        if (!userID || !otp) {
            return res.json({ error: 'Empty otp details are not allowed', success })
        }

        const userOTPverify = await UserOTP.find({ userID })
        userOTPverify.reverse()
        if (!userOTPverify) {
            return res.json({ error: 'Please click on Send OTP again', success })
        }

        const { expiresAt } = userOTPverify[0]
        const hashedOTP = userOTPverify[0].otp


        if (expiresAt < Date.now()) {
            // User otp record has expired
            await UserOTP.deleteMany({ userID })
            return res.json({ error: 'OTP expired, please click on Send OTP again', success })
        }

        const validOTP = await bcrypt.compare(otp, hashedOTP)

        if (!validOTP) {
            return res.json({ error: 'Invalid OTP', success })
        }
        await UserOTP.deleteMany({ userID })
        let user = await User.findById(userID)

        const token = jwt.sign({ data: user }, process.env.ACCESS_SECRET, { expiresIn: '24h' })

        console.log(token);
        res.cookie(token, 'token', { expire: 86400000 + Date.now() });

        // res.cookie("token", token, {
        //     httpOnly: true
        // })

        success = true
        return res.json({ message: "OTP Verified", success, token })
    } catch (error) {
        res.json({
            error: "Something went wrong.",
            success
        })
    }
})
router.post('/resendotp', async (req, res) => {
    let success = false
    try {
        let { userID, phonenumber } = req.body

        if (!userID, phonenumber) {
            return res.json({ error: 'Empty otp details are not allowed', success })
        }

        // delete existing record and resend
        await UserOTP.deleteMany({ userID })
        await sendOtp(userID, phonenumber)
        success = true

        res.json({ message: 'OTP sent successfully', success })
    } catch (error) {
        res.json({
            error: "Something went wrong.",
            success
        })
    }
})
router.post('/getuser', async (req, res) => {
    const { phonenumber } = req.body;
    try {
        const user = await User.findOne({ phonenumber });
        user ? res.json(user) : res.json({ error: "User not found." });
    } catch (error) {
        res.json({
            error: "Something went wrong."
        })
    }
});

router.post('/createcreator', async (req, res) => {
    const {
        name,
        phonenumber,
        username,
        email,
        domain,
        instagramusername,
        instagramcount,
        youtubeusername,
        youtubecount,
        facebookusername,
        facebookcount,
        twitterusername,
        twittercount
    } = req.body;
    try {
        const _creator = await Creator.findOne({ phonenumber })
        if (_creator) return res.json({ error: "Creator already registred." })
        let creator = await Creator.create({
            name,
            phonenumber,
            username,
            email,
            domain,
            instagramusername,
            instagramcount,
            youtubeusername,
            youtubecount,
            facebookusername,
            facebookcount,
            twitterusername,
            twittercount
        })
        res.json(creator);
    } catch (error) {
        res.json({
            error: "Something went wrong."
        })
    }
});
router.post('/getcreator', async (req, res) => {
    const { phonenumber } = req.body;
    try {
        const creator = await Creator.findOne({ phonenumber });
        creator ? res.json(creator) : res.json({ error: "Creator not found." });
    } catch (error) {
        res.json({
            error: "Something went wrong."
        })
    }
});

router.post('/authuser', async (req, res) => {
    const token = req.body.token;
    try {
        if (!token) {
            return res.status(400).json({ msg: 'Invalid Authentication' })
        }
        console.log("Ok");

        jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
            if (err) {
                return res.status(400).json({ msg: 'Invalid Authentication' })
            }
            res.json({ isLoggedIn: true, success: true })
        })
    } catch (error) {
        return res.status(400).json({ msg: 'Something went wrong' })
    }
})

module.exports = router;