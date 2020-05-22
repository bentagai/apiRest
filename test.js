process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
require('dotenv').config()

const express = require('express')
const morgan = require('morgan')

// ADDING MIDDLEWARES & ROUTER
const app = express()
  .use(morgan('combined'))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .use('/api', require('./api/routes'))

// Init server
const PORT = process.env.PORT || 2222
app.listen(PORT, (err) => {
  if (err) { throw new Error(err) }
  console.info(`📡  PORT: http://localhost:${PORT}`)
})
