process.stdout.write('\x1B[2J\x1B[0f') // Limpia la terminal

const express = require('express')
const morgan = require('morgan') // Permite ver por consola las peticiones que van llegando al servidor.

// Middelwares
const app = express()
  .use(morgan('dev'))
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
// Routes
  .use('/api', require('./api/routes'))

// Init Server
const PORT = process.env.PORT || 3000
app.set('port', process.env.PORT || 3000)

app.listen(PORT, (err) => {
  if (err) { throw new Error(err) }
  console.info(`PORT: http://localhost:${PORT}`)
})
