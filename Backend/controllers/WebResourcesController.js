const { WebResource } = require("../models/WebResourcesModel");
const { paginate } = require('../utilities/util')

exports.getAllWebResources = async (req, res) => {
    let filter = {};
    if (req.query.title) {
        filter.title = req.query.title;
    }
    const aggregation = [{ $match: filter }];
    const query = WebResource.aggregate(aggregation);
    const paginatedResult = await paginate(req, query);
    return res.status(200).send(paginatedResult);
};