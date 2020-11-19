const router = require('express').Router()
const eventController = require('../controllers/EventController')
const inputValidator = require('../middlewares/validator')
const { validationSchema, editValidationSchema, addLinkValidationSchema } = require('../models/Event')

router.get('/', eventController.getAllEvents)
router.get('/:id', eventController.getEventById)

router.post('/', inputValidator(validationSchema), eventController.addEvent)
router.put('/:id', inputValidator(editValidationSchema), eventController.updateEvent)
router.put('/:id/links', inputValidator(addLinkValidationSchema), eventController.addEventLink)
router.delete('/:id', eventController.deleteEvent)

module.exports = router
