const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const SupportSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    way:{
        type:String,
        enum: ["Q&A", "Recruit", "Mentor", "Other"],
        required: true,
    },
    experience:{
        type:String,
        required: true,
    },
    phase: {
        type: String,
        required: true
    }

},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});



const validationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    way: Joi.string().valid("Q&A", "Recruit", "Mentor", "Other").required(),
    experience: Joi.string().required(),
    phase: Joi.string().required(),
});
const editValidationSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    way: Joi.string().optional(),
    experience: Joi.string().optional(),
    phase: Joi.string().optional(),
});

const Support =  mongoose.model("Support", SupportSchema);
exports.Support = Support;
exports.validationSchema = validationSchema;
exports.editValidationSchema = editValidationSchema;

