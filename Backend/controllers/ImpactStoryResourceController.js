const { ImpactStoryResource } = require("../models/ImpactStoryResourceModel");
const { paginate } = require('../utilities/util')

exports.getAllImpactStoryResources = async (req, res) => {
    let filter = {};
    if (req.query.name) {
        let re = new RegExp(req.query.name, "i");
        Object.assign(filter, { name: { $regex: re } });
    }
    if (req.query.title) {
        filter.title = req.query.title;
    }
    if (req.query.phase) {
        filter.phase = req.query.phase;
    }

    const aggregation = [{ $match: filter }];
    const query = ImpactStoryResource.aggregate(aggregation);
    const paginatedResult = await paginate(req, query);
    return res.status(200).send(paginatedResult);
};