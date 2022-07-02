// Import enviroment variables = .env
require('dotenv').config()

// Import Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
let cookieParser = require('cookie-parser');

// Imports from cart merge
const Razorpay = require('razorpay')
const uniqid = require('uniqid')
const crypto = require("crypto")

// Import Routes
const authRoute = require('./routes/auth.route')
const collectionRoute = require('./routes/collection.route')
const productRoute = require('./routes/product.route')
const pebbleRoute = require('./routes/pebble.route')

// Constants
const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

// Create and configure express app
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser());

// Cart merge config
app.use(express.urlencoded({ extended: false }))

// Setup Routes
app.use('/api/auth', authRoute)
app.use('/api/collection', collectionRoute)
app.use('/api/product', productRoute)
app.use('/api/pebble', pebbleRoute)
app.use('/api/creator', require('./controllers/creator.controller'))

// Cart merge
const instance = new Razorpay({ key_id: 'rzp_test_FWaPBQKjitY4pj', key_secret: 'AmgyVjlPGmrnn9IG3sCvlYFu', });

app.get('/api/auth/authuser', async (req, res, next) => {
    console.log(req.cookies);
    const token = req.cookies.token;
    try {
        if (!token) {
            return res.status(400).json({ msg: 'Invalid Authentication' })
        }

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

app.post('/create/orderId', async (req, res) => {

    const options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: uniqid()
    };
    try {
        const response = await instance.orders.create(options)
        console.log(response)

        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })

    } catch (err) {
        console.log(err)
    }

})

app.post('/verifyPayment', async (req, res) => {
    console.log(req.body.razorpay_signature)
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", 'AmgyVjlPGmrnn9IG3sCvlYFu')
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: 'success' });
        }
        else {
            return res.status(400).json({ message: "Invalid signature sent!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
})

// Connect to database
mongoose.connect(DB_URI, error => {
    if (error) {
        console.log('Failed to connect to database.')
    } else {
        console.log('Connected to database.')

        // Start the server after connected to database
        const server = app.listen(PORT, () => {
            // console.log('Server listening on port:', PORT)
            console.log(`Server is listening at http://localhost:${PORT}`)
        })

        const gracefulShutdown = signal => {
            process.on(signal, async () => {
                server.close()
                await mongoose.disconnect()
                console.log('Database Disconnected.')
                console.log('Server Closed:', signal)
                process.exit(0)
            })
        }

        // Graceful shutdown
        ["SIGTERM", "SIGINT"].forEach(gracefulShutdown)
    }
})