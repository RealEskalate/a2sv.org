var mongoose = require('mongoose')
const Joi = require("@hapi/joi");

var teamSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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

let teamValidator = function(obj) {
    var schema = Joi.object({
        name: Joi.string().required(),
        image: Joi.string().max(100).required(),
        title: Joi.string().max(100).required(),
        country: Joi.string().max(50).required(),
        description: Joi.string().max(1000).required(),
        email: Joi.string().email().required(),
    })
    let { error } =  schema.validate(obj,{allowUnknown:true});
    return error
}


exports.teamValidator = teamValidator

const Team = mongoose.model("Team", teamSchema);
exports.Team = Team;

const TeamDemo = mongoose.model("TeamDemo", teamSchema);
exports.TeamDemo = TeamDemo;
