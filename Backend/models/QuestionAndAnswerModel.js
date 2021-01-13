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
    phase: {
        type: String,
        required: true
    },
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const validationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    profession: Joi.string().required(),
    bio: Joi.string(),
    phase: Joi.string().required()
});

const editValidationSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    profession: Joi.string().optional(),
    bio: Joi.string().optional(),
    phase: Joi.string().optional(),
});

const QuestionAndAnswer = mongoose.model('QuestionAndAnswer', QuestionAndAnswerSchema)
exports.QuestionAndAnswer = QuestionAndAnswer
exports.validationSchema = validationSchema;
exports.editValidationSchema = editValidationSchema;
