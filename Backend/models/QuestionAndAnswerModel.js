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

const validationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    profession: Joi.string().required(),
    bio: Joi.string(),
});

const editValidationSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    profession: Joi.string(),
    bio: Joi.string(),
});

const QuestionAndAnswer = mongoose.model('QuestionAndAnswer', QuestionAndAnswerSchema)
exports.QuestionAndAnswer = QuestionAndAnswer
exports.validationSchema = validationSchema;
exports.editValidationSchema = editValidationSchema;
