const { Mentorship, validator } = require("../models/MentorshipModel.js");
const { paginate } = require("../utilities/util");

exports.getAllMentorships = async (req, res) => {
    const aggregation = []
    const query = Mentorship.aggregate(aggregation)
    const paginatedResult = await paginate(req, query)
    return res.status(200).send(paginatedResult)
}

exports.getMentorshipsByID = async (req, res) => {
    const {id} = req.params
    const mentorship = await Mentorship.findById(id)
    if (!mentorship) {
        return res.status(404).send("Mentorship does not exist")
    }
    return res.status(200).send(mentorship)
};

exports.createMentorships = async (req, res) => {
    const mentorship = new Mentorship(req.body)
    const notValid = validator(mentorship)
    if (notValid) {
        return res.status(422).send(notValid.message)
    }
    await mentorship.save()
    return res.status(201).send(mentorship)
};

exports.patchMentorships = async (req, res) => {
    const { id } = req.params;
    const mentorship = await Mentorship.findById(id)
    if (!mentorship) {
        return res.status(404).send(`Mentorship with id ${id} is not found`);
    }
    mentorship.set(req.body)
    const notValid = validator(mentorship);
    if (notValid) {
        return res.status(422).send(notValid.message)
    }
    await mentorship.save()
    return res.status(200).send(mentorship)
};

exports.deleteMentorships = async (req, res) => {
    const { id } = req.params
    const mentorship = await Mentorship.findById(id)
    if (!mentorship) {
        return res.status(404).send(`Mentorship with id ${id} is not found`)
    }
    await Mentorship.findByIdAndDelete(id);
    return res.status(200).send(mentorship)
};