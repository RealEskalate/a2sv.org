const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const contactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    subject:{
        type:String,
    },
    message:{
        type:String,
    },

},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


let contactValidator = function(obj) {
	var schema = Joi.object({
		name: Joi.string().required(),
		subject: Joi.string().min(5).max(1000).required(),
		email: Joi.string().email().required(),
		message: Joi.string().min(10).max(3600).required(),
	})
    let { error } =  schema.validate(obj);
    return error
}


exports.contactValidator = contactValidator

const Contact = mongoose.model("Contact", contactSchema);
exports.Contact = Contact;

const ContactDemo = mongoose.model("ContactDemo", contactSchema);
exports.ContactDemo = ContactDemo;
