const router = require('express').Router()
const indexRouter = require('../routes/indexRouter.js')
const contactRouter = require('../routes/ContactControllerRouter.js')
const informationRouter = require('../routes/InformationRouter')
const eventRouter = require('../routes/EventRouter')

router.use('/', indexRouter)
router.use('/api/contact', contactRouter)

router.use('/information/', informationRouter)
router.use('/event/', eventRouter)
router.use('/api/information/', informationRouter)
router.use('/api/event/', eventRouter)

module.exports = router
