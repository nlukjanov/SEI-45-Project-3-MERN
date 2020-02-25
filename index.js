const express = require('express')
const app = express()
const { port, dbURI } = require('./backend/config/environment')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('./backend/lib/logger')
const handleError = require('./backend/lib/errorHandler')
const router = require('./backend/config/router')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.log(err)
    console.log(`Mongo is connected to '${dbURI}'`)
  }
)

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use(logger)

app.use('/api',router)
app.use(handleError)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app