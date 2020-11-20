const router = require('express').Router()
const interviewOfferController = require('../controllers/InterviewOfferController')
const inputValidator = require('../middlewares/validator')
const { validationSchema, editValidationSchema } = require('../models/InterviewOfferModel')

router.get('/',interviewOfferController.getAllInterviewOffer)
router.get('/:id', interviewOfferController.getInterviewOfferById)

router.post('/', inputValidator(validationSchema), interviewOfferController.addInterviewOffer)
router.put('/:id', inputValidator(editValidationSchema), interviewOfferController.updateInterviewOffer)
router.delete('/:id', interviewOfferController.deleteInterviewOffer)

module.exports = router
