const router = require('express').Router()
const indexRouter = require('../routes/indexRouter.js')
const contactRouter = require('../routes/ContactControllerRouter.js')
const teamRouter = require('../routes/TeamControllerRouter.js')
const informationRouter = require('../routes/InformationRouter')
const eventRouter = require('../routes/EventRouter')
const impactStoryResourceRouter = require("../routes/ImpactStoryResourceRouter");
const webResourceRouter = require("../routes/WebResourceRouter");
const supportRouter = require("../routes/SupportControllerRouter");

router.use('/', indexRouter)
router.use('/api/contact', contactRouter)
router.use('/api/team', teamRouter)
router.use('/api/information/', informationRouter)
router.use("/api/event/", eventRouter);
router.use("/api/impactStoryResource/", impactStoryResourceRouter);
router.use("/api/webResource/", webResourceRouter);
router.use("/api/support", supportRouter);

module.exports = router
