const express = require('express')
const app = express()
const versionRouter = require('./controllers/version')
const middleware = require('./utils/middleware')

app.use(express.json())

app.use('/api/version', versionRouter)

app.use(middleware.unknownEndpoint)

module.exports = app