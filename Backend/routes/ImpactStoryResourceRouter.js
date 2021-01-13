const router = require("express").Router();
const impactStoryResourceController = require("../controllers/ImpactStoryResourceController");

router.get("/", impactStoryResourceController.getAllImpactStoryResources);

module.exports = router;
