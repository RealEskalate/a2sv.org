const { Support } = require("../models/SupportModel");
const { paginate } = require("../utilities/util");

exports.getAllSupports = async (req, res) => {
    let filter = {};
    if (req.query.phase) {
        filter.phase = req.query.phase;
    }
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
