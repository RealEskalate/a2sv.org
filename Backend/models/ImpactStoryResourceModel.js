const mongoose = require("mongoose");

const impact_stories_schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    phase: {
        type: String,
        required: true,
    },
});

const ImpactStoryResource = mongoose.model("ImpactStory", impact_stories_schema);
exports.ImpactStoryResource = ImpactStoryResource;
