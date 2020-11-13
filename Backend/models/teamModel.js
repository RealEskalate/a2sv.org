var mongoose = require('mongoose')
var teamSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
})
const Team = module.exports = mongoose.model('Team', teamSchema)
