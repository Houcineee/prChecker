const express = require("express")
const webhookRoutes = require("./routes/webhookRoutes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", webhookRoutes)

module.exports = app
