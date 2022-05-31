const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const Creator = require('../models/Creators');

//Route Createuser

router.post('/createuser', async (req, res) => {
    const { name, phonenumber, email, dob, gender } = req.body;
    let user = await User.create({
        name,
        phonenumber,
        email,
        dob,
        gender
    })
    res.json(user);
});
router.post('/getuser', async (req, res) => {
    const { phonenumber } = req.body;
    let user = await User.findOne({ phonenumber });
    if (user)
        res.json(user);
    else
        res.send(false);
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