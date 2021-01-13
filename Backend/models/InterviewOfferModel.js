const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const interviewOfferSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        company_email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
        },
        phase: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
); 

const ValidationSchema = Joi.object({
    name: Joi.string().required(),
    company_email: Joi.string().email().required(),
    message: Joi.string(),
    phase: Joi.string().required()
})

const EditValidationSchema = Joi.object({
    name: Joi.string().optional(),
    company_email: Joi.string().email().optional(),
    message: Joi.string().optional(),
    phase: Joi.string().optional(),
});

const InterviewOffer = mongoose.model('InterviewOffer', interviewOfferSchema)
exports.InterviewOffer = InterviewOffer
exports.validationSchema = ValidationSchema
exports.editValidationSchema = EditValidationSchema