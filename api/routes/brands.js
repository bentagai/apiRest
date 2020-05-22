const router = require('express').Router()
const fs = require('fs')
const brands = require('../sample.json')

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

// add new post
router.post('/', (req, res) => {
  const { title, pais } = req.body // Los datos que quiero introducir
  if (title && pais) {
    let id = brands.length + 1
    id = JSON.stringify(id)
    let newBrand = { id, ...req.body } // ...req.body Inserta el objeto creado
    brands.push(newBrand)

    // save new post
    newBrand = JSON.stringify(brands)
    fs.writeFileSync('api/sample.json', newBrand, 'utf-8')
    res.json(brands)
  } else {
    res.send('not saved')
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
    let update = { ...req.body } // ...req.body Inserta el objeto actualizado

    // update post
    update = JSON.stringify(brands)
    fs.writeFileSync('api/sample.json', update, 'utf-8')
    res.json(brands)
  } else {
    res.status(500).json('Error')
  }
})
router.delete('/:id', (req, res) => {
  const { id } = req.params
  _.each(brands, (brand, idx) => {
    if (brand.id === id) {
      brands.splice(idx, 1)
    }
  })
  res.send(brands)
})

module.exports = router
