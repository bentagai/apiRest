const router = require('express').Router()
const brands = require('../sample.json')

const _ = require('underscore')

router.get('/', (req, res) => {
  res.json(brands)
})

router.post('/', (req, res) => {
  const { title, pais } = req.body
  if (title && pais) {
    const id = brands.length + 1
    const newBrand = { ...req.body, id } // ...req.body Inserta el objeto creado
    brands.push(newBrand)

    res.json(brands)
  } else {
    res.send('not saved')
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params // La Id que quiero actualizar
  const { title, pais } = req.body // Los datos que quiero actualizar
  if (title && pais) {
    _.each(brands, (brand, idx) => {
      if (brand.id === id) {
        brand.title = title
        brand.pais = pais
      }
    })
    res.json(brands)
  } else { res.status(500).json('Error') }
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
