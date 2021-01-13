const mongoose = require("mongoose");

const web_resources_schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    list: [{
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    }],
});

const WebResource = mongoose.model("WebResource", web_resources_schema);
exports.WebResource = WebResource;
