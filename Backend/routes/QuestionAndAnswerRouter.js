const router = require('express').Router();
const QuestionAndAnswerController = require('../controllers/QuestionAndAnswerController');
// Add member related routes here
router.get('/', QuestionAndAnswerController.getAllQuestionsAndAnswers);
router.get('/:id', QuestionAndAnswerController.getQuestionsAndAnswersByID);
router.post('/', QuestionAndAnswerController.createQuestionsAndAnswers);
router.patch("/:id", QuestionAndAnswerController.patchQuestionsAndAnswers);
router.delete('/:id', QuestionAndAnswerController.deleteQuestionsAndAnswers);

module.exports = router;
