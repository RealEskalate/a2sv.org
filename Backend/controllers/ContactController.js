const {Contact,contactValidator} = require("../models/ContactModel.js");
const { paginate } = require('../utilities/util')
const mongoose = require("mongoose");

// getting all contacts
exports.get_all_contacts = async (req, res) => {
    let filter = {};

    if(req.query.name){
        let re = new RegExp(req.query.name, 'i') 
        Object.assign(filter,{name : { $regex: re }})
    }

    if(req.query.email){
        filter.email = req.query.email;
    }

    if(req.query.subject){
        let re = new RegExp(req.query.subject, 'i') 
        Object.assign(filter,{subject : { $regex: re }})
    }
    if (req.query.phase) {
        filter.phase = req.query.phase;
    }

    const query = Contact.aggregate([{$match: filter}])
    const paginatedResult = await paginate(req, query)

    return res.send(paginatedResult);   
};


// get single contact
exports.get_contact_by_id = async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    return res.send(contact);
};


// Post a contact
exports.post_contact_data = async (req, res) => {
    const contact = new Contact(req.body);
    
    const notValid = contactValidator(contact);
    if (notValid) {
        return res.status(422).send(notValid.message);
    }
    
    contact._id = mongoose.Types.ObjectId()
    await contact.save();

    return res.status(201).send(contact);
};


// update a contact
exports.update_contact = async (req, res) => {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
        return res.status(404).send("Contact doesn't exist.");
    }

    contact.set(req.body)

    const notValid = contactValidator(contact);
    if (notValid) {
        return res.status(422).send(notValid.message);
    }

    await contact.save()
    return res.status(200).send(contact);
};


// Deleting a contact
exports.delete_contact = async (req, res) => {
    let contact = await Contact.findByIdAndRemove(req.params.id);
    if (!contact) {
        return res.status(404).send("contact not found");
    }

    return res.status(200).send(contact);
};