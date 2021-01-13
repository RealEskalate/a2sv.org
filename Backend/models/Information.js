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
        type: mongoose.Schema.Types.Mixed
    },
    phase: {
        type: String,
        required: true
    },
}, { 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const validInformationSchema = Joi.object({
    title: Joi.string().required(),
    note: Joi.string().min(10).required(),
    description: Joi.any(),
    phase: Joi.string().required()
})

const validInformationSchemaForUpdate = Joi.object({
    title: Joi.string().optional(),
    note: Joi.string().min(10),
    description: Joi.any(),
    phase: Joi.string().optional(),
});

const Information = mongoose.model('Information', informationSchema)
exports.Information = Information
exports.validationSchema = validInformationSchema
exports.editValidationSchema = validInformationSchemaForUpdate
