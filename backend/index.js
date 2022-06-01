// Import enviroment variables from .env
require('dotenv').config()

// Import Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Import Routes
const authRoute = require('./routes/auth')

// Constants
const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

// Create and configure express app
const app = express()
app.use(express.json())
app.use(cors())

// Setup Routes
app.use('/api/auth', authRoute)

// Connect to database
mongoose.connect(DB_URI, error => {
    if (error) {
        console.log('Failed to connect to database.')
    } else {
        console.log('Connected to database.')

        // Start the server after connected to database
        const server = app.listen(PORT, () => {
            console.log('Server listening on port:', PORT)
        })

        // Graceful shutdown
        ["SIGTERM", "SIGINT"].forEach(signal => {
            process.on(signal, async () => {
                server.close()
                await mongoose.disconnect()
                console.log('Database Disconnected.')
                console.log('Server Closed:', signal)
                process.exit(0)
            })
        })
    }
})