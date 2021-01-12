const router = require('express').Router()
const indexRouter = require('../routes/indexRouter.js')
const contactRouter = require('../routes/ContactControllerRouter.js')
const teamRouter = require('../routes/TeamControllerRouter.js')
const informationRouter = require('../routes/InformationRouter')
const interviewOfferRouter = require('../routes/InterviewOfferRouter')
const eventRouter = require('../routes/EventRouter')
const mentorshipRouter = require("../routes/MentorshipRouter");
const questionAndAnswerRouter = require("../routes/QuestionAndAnswerRouter");
const impactStoryResourceRouter = require("../routes/ImpactStoryResourceRouter");

router.use('/', indexRouter)
router.use('/api/contact', contactRouter)
router.use('/api/team', teamRouter)
router.use('/api/mentorship', mentorshipRouter);
router.use("/api/questionAndAnswer", questionAndAnswerRouter);
router.use('/api/information/', informationRouter)
router.use('/api/interviewOffer/', interviewOfferRouter)
router.use("/api/event/", eventRouter);
router.use("/api/impactStoryResource/", impactStoryResourceRouter);

module.exports = router
