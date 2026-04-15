const express = require("express")
const { handlePullRequestWebhook } = require("../controllers/webhookController")

const webhookRouter = express.Router()

webhookRouter.post("/", handlePullRequestWebhook)

module.exports = webhookRouter
