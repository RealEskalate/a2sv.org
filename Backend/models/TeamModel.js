var mongoose = require('mongoose')
const Joi = require("@hapi/joi");

var teamSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        priority: {
            type: Number,
        },
        member_type: {
            type: String,
            enum: ['ADVISOR', 'MEMBER'],
            default: 'MEMBER',
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


const validTeamSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().max(100).required(),
    title: Joi.string().max(100).required(),
    country: Joi.string().max(50).required(),
    description: Joi.string().max(1000).required(),
    email: Joi.string().email().required(),
    member_type: Joi.string().valid("ADVISOR", "MEMBER").optional(),
    priority: Joi.number().optional(),
    phase: Joi.string().required()
})

const validTeamSchemaForUpdate = Joi.object({
    name: Joi.string().optional(),
    image: Joi.string().max(100).optional(),
    title: Joi.string().max(100).optional(),
    country: Joi.string().max(50).optional(),
    description: Joi.string().max(1000).optional(),
    email: Joi.string().email().optional(),
    member_type: Joi.string().email().optional(),
    priority: Joi.number().optional(),
    phase: Joi.string().optional()
});


exports.validationSchema = validTeamSchema
exports.editValidationSchema = validTeamSchemaForUpdate

const Team = mongoose.model("Team", teamSchema);
exports.Team = Team;

const TeamDemo = mongoose.model("TeamDemo", teamSchema);
exports.TeamDemo = TeamDemo;
