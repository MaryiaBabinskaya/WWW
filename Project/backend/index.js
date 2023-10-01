const express = require('express')
const PORT = process.env.PORT || 5001
const app = express()
app.listen(PORT, () => {
	console.log('Server starting on port ${PORT}')
})
app.get('/api', (req, res) => {
	res.json({
		message: "Hello from backend express.js"
	})
})