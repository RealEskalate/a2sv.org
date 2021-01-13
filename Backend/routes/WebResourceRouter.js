const router = require("express").Router();
const webResourcesController = require("../controllers/WebResourcesController");

router.get("/", webResourcesController.getAllWebResources);

module.exports = router;
