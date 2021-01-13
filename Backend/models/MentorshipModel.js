const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const MentorshipSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    linkedin_url: {
        type: String
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
    experience: Joi.string().required(),
    linkedin_url: Joi.string().uri(),
    phase: Joi.string().required()
});
const editValidationSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    experience: Joi.string().optional(),
    linkedin_url: Joi.string().uri().optional(),
    phase: Joi.string().optional(),
});


const Mentorship = mongoose.model('Mentorship', MentorshipSchema);
exports.Mentorship = Mentorship;
exports.validationSchema = validationSchema;
exports.editValidationSchema = editValidationSchema;

