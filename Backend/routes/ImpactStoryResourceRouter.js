const router = require('express').Router()
const webResourceController = require('../controllers/WebResourceController')

router.get("/", webResourceController.getAllWebResources);

module.exports = router
