process.stdout.write('\x1B[2J\x1B[0f') // Limpia la terminal
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan') // Permite ver por consola las peticiones que van llegando al servidor.

// Middelwares
const app = express()
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
// Routes
  .use('/api', require('./api/routes'))

// Init Server
const PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
  if (err) { throw new Error(err) }
  console.info(`PORT: http://localhost:${PORT}`)
})
