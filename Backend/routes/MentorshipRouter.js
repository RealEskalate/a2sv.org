const router = require('express').Router();
const MentorshipController = require('../controllers/MentorshipController');
const inputValidator = require('../middlewares/validator')
const { validationSchema, editValidationSchema } = require('../models/MentorshipModel')

// Add member related routes here
router.get('/', MentorshipController.getAllMentorships);
router.get('/:id', MentorshipController.getMentorshipsByID);
router.post('/', inputValidator(validationSchema), MentorshipController.createMentorships);
router.patch('/:id', inputValidator(editValidationSchema), MentorshipController.patchMentorships);
router.delete('/:id', MentorshipController.deleteMentorships);

module.exports = router;
