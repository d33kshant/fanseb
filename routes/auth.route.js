const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Creator = require('../models/creator.model');

//Route Createuser

router.post('/createuser', async (req, res) => {
    const { name, phonenumber, email, dob, gender } = req.body;
    try {
        const _user = await User.findOne({ phonenumber })
        if (_user) return res.json({ error: "User already registred." })
        let user = await User.create({
            name,
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
        let user = await User.findOne({ phonenumber });
        user ? res.json(user) : res.json({ error: "User not found." });
    } catch (error) {
        res.json({
            error: "Something went wrong."
        })
    }
});
router.post('/createcreator', async (req, res) => {
    const { name, phonenumber, username, email, domain, instagramusername, instagramcount, youtubeusername, youtubecount, facebookusername, facebookcount, twitterusername, twittercount } = req.body;
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
});
router.post('/getcreator', async (req, res) => {
    const { phonenumber } = req.body;
    let creator = await Creator.findOne({ phonenumber });
    if (creator)
        res.json(creator);
    else
        res.send(false);
});

module.exports = router;