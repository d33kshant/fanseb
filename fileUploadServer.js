require('dotenv').config()
const express = require('express')
const fileupload = require('express-fileupload')
const mongoose = require('mongoose')
const path = require('path')
const { generate: generateId } = require('shortid')

const PORT = process.env.FILE_SERVER_PORT || 5050
const DB_URI = process.env.FILE_SERVER_DB
const VIDEO_PATH = path.join(__dirname, 'videos')
const THUMB_PATH = path.join(__dirname, 'thumbnails')
const BASE_URL = `http://${process.env.HOST}:${PORT}`

const Video = mongoose.model('file', new mongoose.Schema({
	content_type: String,
	thumb: String,
	_id: {
		type: String,
		unique: true,
	},
	created_on: {
		type: Date,
		default: Date.now
	},
}))

const app = express()
app.use(express.json())
app.use(fileupload())

app.use('/thumbnails', express.static(path.join(__dirname, 'thumbnails')))

app.post('/', (req, res) => {
	const _id = generateId()

	const thumbFile = req.files.thumbnail
	const videoFile = req.files.video

	if (!videoFile || !thumbFile) return res.json({ error: "Missing required files." })

	try {

		const thumbName = `${_id}${thumbFile.name.slice(thumbFile.name.lastIndexOf('.'))}`
		const videoName = `${_id}${videoFile.name.slice(videoFile.name.lastIndexOf('.'))}`

		thumbFile.mv(path.join(THUMB_PATH, thumbName), errorThumb => {
			if (errorThumb) return res.json({ error: "Error uploading thumbnail" })

			videoFile.mv(path.join(VIDEO_PATH, videoName), async errorVideo => {
				if (errorVideo) return res.json({ error: "Error uploading video" })

				const video = new Video({
					_id,
					content_type: videoFile.mimetype,
					thumb: `${BASE_URL}/thumbnails/${thumbName}`,
				})

				await video.save()
				res.json({
					message: "Video and thumbnail has been uploaded",
					video: `${BASE_URL}/videos/${videoName}`,
					thumb: `${BASE_URL}/thumbnails/${thumbName}`
				})
			})
		})

	} catch (error) {
		res.json({
			error: "Something went wrong.",
			payload: error,
		})
	}
})

mongoose.connect(DB_URI, error => {
	if (error) {
		console.log('Failed to connect to database.')
	} else {
		console.log('Connected to database.')

		const server = app.listen(PORT, () => {
			console.log('File Server listening on port:', PORT)
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

		["SIGTERM", "SIGINT"].forEach(gracefulShutdown)
	}
})