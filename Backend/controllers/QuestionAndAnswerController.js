const { QuestionAndAnswer } = require("../models/QuestionAndAnswerModel.js");
const { paginate } = require("../utilities/util");

exports.getAllQuestionsAndAnswers = async (req, res) => {
    let filter = {};
    if (req.query.phase) {
        filter.phase = req.query.phase;
    }
    const query = QuestionAndAnswer.aggregate([{$match: filter}]);
    const paginatedResult = await paginate(req, query);
    return res.status(200).send(paginatedResult);
};

exports.getQuestionsAndAnswersByID = async (req, res) => {
    const { id } = req.params;
    const questionAndAnswer = await QuestionAndAnswer.findById(id);
    if (!questionAndAnswer) {
        return res.status(404).send("QuestionAndAnswer with id ${id} does not exist");
    }
    return res.status(200).send(questionAndAnswer);
};

exports.createQuestionsAndAnswers = async (req, res) => {
    const questionAndAnswer = new QuestionAndAnswer(req.body);
    await questionAndAnswer.save();
    return res.status(201).send(questionAndAnswer);
};

exports.patchQuestionsAndAnswers = async (req, res) => {
    const { id } = req.params;
    const questionAndAnswer = await QuestionAndAnswer.findById(id);
    if (!questionAndAnswer) {
        return res.status(404).send(`QuestionAndAnswer with id ${id} is not found`);
    }
    questionAndAnswer.set(req.body);
    await questionAndAnswer.save();
    return res.status(200).send(questionAndAnswer);
};

exports.deleteQuestionsAndAnswers = async (req, res) => {
    const { id } = req.params;
    const questionAndAnswer = await QuestionAndAnswer.findById(id);
    if (!questionAndAnswer) {
        return res.status(404).send(`QuestionAndAnswer with id ${id} is not found`);
    }
    await QuestionAndAnswer.findByIdAndDelete(id);
    return res.status(200).send(questionAndAnswer);
};
