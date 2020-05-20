# apiRest
Propósito académico.
Esta versión sólo almacena la información en memoria.

## Code Notes
Comando para crear Package.json
npm init -y

Express Middelware
Un middelware es una función que procesa datos antes de que el servidor los reciba. 

// Middelwares
Opción 1: app.use(morgan('dev')) 
Opción 2: app.use(morgan('combined')) Da un mensaje en consola más largo.

// Middelware
app.use(express.json()) 
Es un metodo de express permite al servidor entender y recibir formatos JSON
 
// Middelware
app.use(express.urlencoded({ extended: false }))
Sirve para entender datos que viene desde inputs de formualrios como textos, no imagenes. 

// Clase / Método
const router = require('express').Router()
.Router() El método router permite definir nuevas rutas para el servidor.

Le pasa todo el objeto req.body dentro de un nuevo objeto
{...req.body}

req.params 
es un objeto que te da toda la informacion de los parametros.  

const { id } = req.params El id que quiero actualizar 
const { datos que quiero actualizar } = req.body Los datos que quiero actualizar