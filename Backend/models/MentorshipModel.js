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
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}) 

const validationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    experience: Joi.string().required(),
    linkedin_url: Joi.string(),
});
const editValidationSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    experience: Joi.string(),
    linkedin_url: Joi.string(),
});


const Mentorship = mongoose.model('Mentorship', MentorshipSchema);
exports.Mentorship = Mentorship;
exports.validationSchema = validationSchema;
exports.editValidationSchema = editValidationSchema;

