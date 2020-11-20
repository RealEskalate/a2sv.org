var mongoose = require('mongoose')
const Joi = require("@hapi/joi");

var teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
})


const validTeamSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().max(100).required(),
    title: Joi.string().max(100).required(),
    country: Joi.string().max(50).required(),
    description: Joi.string().max(1000).required(),
    email: Joi.string().email().required(),
})

const validTeamSchemaForUpdate = Joi.object({
    name: Joi.string().optional(),
    image: Joi.string().max(100).optional(),
    title: Joi.string().max(100).optional(),
    country: Joi.string().max(50).optional(),
    description: Joi.string().max(1000).optional(),
    email: Joi.string().email().optional(),
})


exports.validationSchema = validTeamSchema
exports.editValidationSchema = validTeamSchemaForUpdate

const Team = mongoose.model("Team", teamSchema);
exports.Team = Team;

const TeamDemo = mongoose.model("TeamDemo", teamSchema);
exports.TeamDemo = TeamDemo;
