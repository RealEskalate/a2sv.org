const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    eventType: {
        type: String,
        // We can add some more event types when necessary
        enum: ['CONTEST', 'Q&A', 'PRODUCT RELEASE'],
        required: true
    },
    description: {
        type: String,
        minlength: 10,
        required: true
    },
    location: {
        type: String
    },
    links: {
        type: [{
            name: {
                type: String
            }, 
            link: {
                type: String
            }
        }],
        default: []
    },
    gallery: {
        type: String
    }
}, { 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})


const validEventSchema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().required(),
    start: Joi.date().required(),
    end: Joi.date().required(),
    description: Joi.string().min(10).required(),
    eventType: Joi.string().valid('CONTEST', 'Q&A', 'PRODUCT RELEASE').required(),
    links: Joi.any(),
    gallery: Joi.string()
})

const validEditEventSchema = Joi.object({
    name: Joi.string(),
    title: Joi.string(),
    start: Joi.date(),
    end: Joi.date(),
    description: Joi.string().min(10),
    eventType: Joi.string().valid('CONTEST', 'Q&A', 'PRODUCT RELEASE'),
    links: Joi.any(),
    gallery: Joi.string()
})

const validAddLinkSchema = Joi.object({
    name: Joi.string().required(),
    link: Joi.string().required() 
})

const Event = mongoose.model('Event', eventSchema)
exports.Event = Event
exports.validationSchema = validEventSchema
exports.editValidationSchema = validEditEventSchema
exports.addLinkValidationSchema = validAddLinkSchema