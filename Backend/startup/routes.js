const router = require('express').Router()
const indexRouter = require('../routes/IndexRouter')
const informationRouter = require('../routes/InformationRouter')
const eventRouter = require('../routes/EventRouter')

router.use('/', indexRouter)
router.use('/api/information/', informationRouter)
router.use('/api/event/', eventRouter)

module.exports = router
