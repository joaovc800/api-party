const router = require('express').Router()

// Service routes
const servicesRouter = require("./service")
router.use("/", servicesRouter)

// Party routes
const partyRouter = require("./parties")
router.use("/", partyRouter)

module.exports = router