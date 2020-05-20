const router = require('express').Router()

// Routers
const brandRouter = require('../routes/brands')
router.use('/brands', brandRouter)

module.exports = router
