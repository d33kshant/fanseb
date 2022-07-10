const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Creator = require('../models/creator.model');

//Route Createuser

router.post('/createuser', async (req, res) => {
    const { profilePic, name, phonenumber, email, dob, gender } = req.body;
    try {
        const _user = await User.findOne({ phonenumber })
        if (_user) return res.json({ error: "User already registred." })
        const user = await User.create({
            profilePic,
            name,
            brand,
            phonenumber,
            email,
            dob,
            gender
        })
        res.json(user);
    } catch (error) {
        res.json({
            error: "Something went wrong."
        })
    }
});
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
//get user by id 
router.get('/user', async (req, res) => {
    const userId = req.query.id
    try {
        const user = await User.findById(userId);
        res.send(user)
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

module.exports = router;