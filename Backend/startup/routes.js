const router = require('express').Router()
const indexRouter = require('../routes/indexRouter.js')
const contactRouter = require('../routes/ContactControllerRouter.js')

router.use('/', indexRouter)
router.use('/api/contact', contactRouter)

module.exports = router