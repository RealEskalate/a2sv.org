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

const validMentorshipSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    experience: Joi.string().required(),
    linkedin_url: Joi.string()
});

const validator = function(obj) {
    let { error } = validMentorshipSchema.validate(obj, { allowUnknown: true });
    return error
}

const Mentorship = mongoose.model('Mentorship', MentorshipSchema);
exports.Mentorship = Mentorship;
exports.validator = validator;

