require('dotenv').config()

const PORT = 3000;
const express = require('express')
const cors = require("cors");

const menuRoute = require('./routes/menu')
const categoryRoute = require('./routes/category')
const middleWareLogRequest = require('./middlewares/logs')

const app = express()

app.use(cors());
app.use(middleWareLogRequest)
app.use(express.json())

app.use("/menu", menuRoute)
app.use("/category", categoryRoute)

app.use((err, req, res, next) => {
	res.json({
			message: err.message
	})
})

app.listen(PORT, () => {
	console.log(`Server berhasil di running di port ${PORT}`)
})