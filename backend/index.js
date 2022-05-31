require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const authRoute = require('./routes/auth')

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)

mongoose.connect(DB_URI, error => {
    if (error) {
        console.log('Failed to connect to database.')
    } else {
        console.log('Connected to database.')
        const server = app.listen(PORT, () => {
            console.log('Server listening on port:', PORT)
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

        ["SIGTERM", "SIGINT"].forEach(signal => gracefulShutdown(signal))
    }
})