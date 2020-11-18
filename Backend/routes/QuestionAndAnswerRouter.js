const router = require('express').Router();
const QuestionAndAnswerController = require('../controllers/QuestionAndAnswerController');
const inputValidator = require('../middlewares/validator')
const { validationSchema, editValidationSchema } = require('../models/QuestionAndAnswerModel')

// Add member related routes here
router.get('/', QuestionAndAnswerController.getAllQuestionsAndAnswers);
router.get('/:id', QuestionAndAnswerController.getQuestionsAndAnswersByID);
router.post('/', inputValidator(validationSchema), QuestionAndAnswerController.createQuestionsAndAnswers);
router.patch("/:id", inputValidator(editValidationSchema), QuestionAndAnswerController.patchQuestionsAndAnswers);
router.delete('/:id', QuestionAndAnswerController.deleteQuestionsAndAnswers);

module.exports = router;
