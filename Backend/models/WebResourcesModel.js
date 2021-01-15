const mongoose = require("mongoose");

const web_resources_schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: {
        type: String,
        required: true,
    },
    body: {}
});

const WebResource = mongoose.model("WebResource", web_resources_schema);
exports.WebResource = WebResource;
