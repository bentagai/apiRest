const router = require('express').Router()

// Routers
const brandRouter = require('../routes/brands')
router.use('/brands', brandRouter)

const userRouter = require('../routes/users')
router.use('/users', userRouter)

module.exports = router
