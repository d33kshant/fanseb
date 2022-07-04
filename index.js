// Import enviroment variables = .env
require('dotenv').config()

// Import Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
let cookieParser = require('cookie-parser');

// Import Routes
const authRoute = require('./routes/auth.route')
const collectionRoute = require('./routes/collection.route')
const productRoute = require('./routes/product.route')
const pebbleRoute = require('./routes/pebble.route')
const paymentRoutes = require('./routes/payment.route')
const creatorRoute = require('./controllers/creator.controller')

const Order = require('./models/order.model')

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
app.use('/api/creator', creatorRoute)
app.use("/api/payment/", paymentRoutes);

app.post('/api/order', async (req, res) => {
    const data = req.body
    const order = new Order(data)
    await order.save()
    res.json({ message: "Order placed." })
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