const mongoose = require('mongoose');
const Joi = require("@hapi/joi");

const QuestionAndAnswerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const validQuestionAndAnswerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    profession: Joi.string().required(),
    bio: Joi.string(),
})

const validator = function(obj) {
    let { error } = validQuestionAndAnswerSchema.validate(obj, { allowUnknown: true })
    return error
}

const QuestionAndAnswer = mongoose.model('QuestionAndAnswer', QuestionAndAnswerSchema)
exports.QuestionAndAnswer = QuestionAndAnswer
exports.validator = validator
