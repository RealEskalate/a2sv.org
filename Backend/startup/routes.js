const router = require('express').Router()
const indexRouter = require('../routes/indexRouter.js')
const contactRouter = require('../routes/ContactControllerRouter.js')
const teamRouter = require('../routes/TeamControllerRouter.js')
const informationRouter = require('../routes/InformationRouter')
const eventRouter = require('../routes/EventRouter')
const mentorshipRouter = require("../routes/MentorshipRouter");
const questionAndAnswerRouter = require("../routes/QuestionAndAnswerRouter");

router.use('/', indexRouter)
router.use('/api/contact', contactRouter)
router.use('/api/team', teamRouter)
router.use('/api/mentorship', mentorshipRouter);
router.use("/api/questionAndAnswer", questionAndAnswerRouter);
router.use('/api/information/', informationRouter)
router.use("/api/event/", eventRouter);

module.exports = router
