const { Support } = require("../models/SupportModel");
const { paginate } = require("../utilities/util");
const  EmailSender = require("../service/EmailSender");

// helper functions
let forwardContactUsInformation = async (support) => {

    let userMessage = {
        email: support.email,
        subject: `From ${support.name}/${support.email} offering his help on ${support.way}`,
        body: `Message from ${support.name} : ${support.experience}`,
    }

    try {
        await EmailSender.sendContactUsInfo(userMessage);
        return 'Message successfully forward.';
    } catch (error) {
        return 'Unable to forward your message.'+ error.getMessage();
    }
  
}

// endpoints
exports.getAllSupports = async (req, res) => {
    let filter = {};
    if (req.query.way) {
        filter.way = req.query.way;
    }
    const query = Support.aggregate([{ $match: filter }]);
    const paginatedResult = await paginate(req, query);
    return res.status(200).send(paginatedResult);
};

exports.getSupportByID = async (req, res) => {
    const { id } = req.params;
    const support = await Support.findById(id);
    if (!support) {
        return res.status(404).send("Support does not exist");
    }
    return res.status(200).send(support);
};

exports.createSupports = async (req, res) => {
    const support = new Support(req.body);
    await support.save();

    await forwardContactUsInformation(support)
    await EmailSender.sendEmailToUser(support)
    
    return res.status(201).send(support);
};


exports.patchSupports = async (req, res) => {
    const { id } = req.params;
    const support = await Support.findById(id);
    if (!support) {
        return res.status(404).send(`Support with id ${id} is not found`);
    }
    support.set(req.body);
    await support.save();
    return res.status(200).send(support);
};

exports.deleteSupports = async (req, res) => {
    const { id } = req.params;
    const support = await Support.findById(id);
    if (!support) {
        return res.status(404).send(`Support with id ${id} is not found`);
    }
    await Support.findByIdAndDelete(id);
    return res.status(200).send(support);
};
