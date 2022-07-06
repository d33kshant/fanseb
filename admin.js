require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.ADMIN_PORT
const DB_URI = process.env.DB_URI

const routes = require('./routes/admin.route')

const app = express()
app.use(express.json())

app.use('/', routes)

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