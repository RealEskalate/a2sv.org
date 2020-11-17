const router = require('express').Router()
const informationController = require('../controllers/InformationController')
const inputValidator = require('../middlewares/validator')
const { validationSchema } = require('../models/Information')
const { editValidationSchema } = require('../models/Information')

router.get('/', informationController.getAllInformation)
router.get('/:id', informationController.getInformationById)

router.post('/', inputValidator(validationSchema), informationController.addInformation)
router.put('/:id', inputValidator(editValidationSchema), informationController.updateInformation)
router.delete('/:id', informationController.deleteInformation)

module.exports = router
