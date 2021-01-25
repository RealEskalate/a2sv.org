const router = require('express').Router()
const inputValidator = require("../middlewares/validator");
const SupportController = require("../controllers/SupportController");
const {validationSchema, editValidationSchema } = require("../models/SupportModel");

router.get('/',SupportController.getAllSupports)
router.get('/:id',SupportController.getSupportByID)

router.post('/', inputValidator(validationSchema), SupportController.createSupports)
router.patch("/:id",inputValidator(editValidationSchema),SupportController.patchSupports);

router.delete('/:id',SupportController.deleteSupports)

module.exports = router
