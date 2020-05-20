process.stdout.write('\x1B[2J\x1B[0f') // Limpia la terminal

const express = require('express')
const app = express()
const morgan = require('morgan') // Permite ver por consola las peticiones que van llegando al servidor.

// Middelwares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/api', require('./api/routes'))

// Init Server
const PORT = process.env.PORT || 3000
app.set('port', process.env.PORT || 3000)

app.listen(PORT, (err) => {
  if (err) { throw new Error(err) }
  console.info(`PORT: http://localhost:${PORT}`)
})
