const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const informationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        minlength: 10,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.Mixed,
        default: null
    }
}, { 
    timestamps: true
})

const validInformationSchema = Joi.object({
    title: Joi.string().required(),
    note: Joi.string().min(10).required(),
    description: Joi.any()
})

const validInformationSchemaForUpdate = Joi.object({
    title: Joi.string(),
    note: Joi.string().min(10),
    description: Joi.any()
})

const Information = mongoose.model('Information', informationSchema)
exports.Information = Information
exports.validationSchema = validInformationSchema
exports.editValidationSchema = validInformationSchemaForUpdate
