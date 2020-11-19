const mongoose = require('mongoose')
const Joi = require('@hapi/joi')
const { required } = require('@hapi/joi')

const interviewOfferSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name:{
        type: String,
        required: true
    },
    company_email:{
        type: String,
        required: true
    },
    message:{
        type: String
    }
    
})

const ValidationSchema = Joi.object({
    name: Joi.string().required(),
    company_email: Joi.string().email().required(),
    message: Joi.string()
})

const EditValidationSchema = Joi.object({
    name: Joi.string(),
    company_email: Joi.string(),
    message: Joi.string()
})

const InterviewOffer = mongoose.model('InterviewOffer', interviewOfferSchema)
exports.InterviewOffer = InterviewOffer
exports.validationSchema = ValidationSchema
exports.editValidationSchema = EditValidationSchema