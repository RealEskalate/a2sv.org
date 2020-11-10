const router = require('express').Router()
const indexRouter = require('../routes/indexRouter.js')

router.use('/', indexRouter)

module.exports = router