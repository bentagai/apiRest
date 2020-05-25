const router = require('express').Router()
const fs = require('fs')
const brands = require('../sample.json')
const uuid = require('uuid')
const _ = require('underscore')

router.get('/', (req, res) => {
  res.json(brands)
})

// find by id
router.get('/:id', (req, res) => {
  const { id } = req.params
  for (let i = 0; i < brands.length; i++) {
    if (id === brands[i].id) {
      res.json(brands[i])
    }
  }
})

// add new
router.post('/', (req, res) => {
  const { title, pais } = req.body // Los datos que quiero introducir
  if (title && pais) {
    const id = uuid.v4()
    let newBrand = { id, ...req.body } // ...req.body Inserta el objeto creado
    brands.push(newBrand)

    // save new post
    newBrand = JSON.stringify(brands)
    fs.writeFileSync('api/sample.json', newBrand, 'utf-8')
    res.json(brands)
  } else {
    res.status(500).json('Error')
  }
})

// update
router.put('/:id', (req, res) => {
  const { id } = req.params // La Id que quiero buscar para actualizar
  var { title, pais } = req.body // Los datos que quiero actualizar
  if (title && pais) {
    _.each(brands, (brand, idx) => {
      if (brand.id === id) {
        brand.title = title
        brand.pais = pais
      }
    })
    // save update
    let update = { ...req.body } // ...req.body Inserta el objeto actualizado
    update = JSON.stringify(brands)
    fs.writeFileSync('api/sample.json', update, 'utf-8')
    res.json(brands)
  } else {
    res.status(500).json('Error')
  }
})

// delete
router.delete('/:id', (req, res) => {
  const { id } = req.params
  for (let i = 0; i < brands.length; i++) {
    if (id === brands[i].id) {
      brands.splice([i], 1)
    }
  }
  // save delete
  let erase = { ...req.body } // ...req.body Guarda el objeto actualizado
  erase = JSON.stringify(brands)
  fs.writeFileSync('api/sample.json', erase, 'utf-8')
  res.json(brands)
})

module.exports = router
