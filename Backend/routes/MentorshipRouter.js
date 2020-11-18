const router = require('express').Router();
const MentorshipController = require('../controllers/MentorshipController');
// Add member related routes here
router.get('/', MentorshipController.getAllMentorships);
router.get('/:id', MentorshipController.getMentorshipsByID);
router.post('/', MentorshipController.createMentorships);
router.patch('/:id', MentorshipController.patchMentorships);
router.delete('/:id', MentorshipController.deleteMentorships);

module.exports = router;
