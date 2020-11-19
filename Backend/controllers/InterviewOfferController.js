const { InterviewOffer } = require('../models/InterviewOfferModel')
const { paginate } = require('../utilities/util')

exports.addInterviewOffer = async(req, res) => {
    const interviewOffer = new InterviewOffer(req.body)
    await interviewOffer.save()
    return res.status(201).send(interviewOffer)
}

exports.getAllInterviewOffer = async(req,res) => {
    const aggregation = []
    const query = InterviewOffer.aggregate(aggregation)
    const paginatedResult = await paginate(req, query)
    return res.status(200).send(paginatedResult)
}

exports.getAllInterviewOfferById = async(req, res) => {
    const{ id } = req.params
    const interviewOffer = await InterviewOffer.findOne({_id: id})
    if (!interviewOffer){
        return res.status(404).send('Interview offer not found')
    }
    return res.status(200).send(interviewOffer)


}

exports.updateInterviewOffer = async(req, res) => {
    const { id } = req.params
    const interviewOffer = await InterviewOffer.findOne({_id: id})

    if(!interviewOffer){
        return res.status(404).send(`Interview offer with id ${id} is not found`)
    }
    interviewOffer.set(req.body)
    await interviewOffer.save()
    return res.status(200).send(interviewOffer)
}

exports.deleteInterviewOffer = async (req, res) => {
    const { id } = req.params
    const interviewOffer = await InterviewOffer.findOne({_id: id})
    if(!interviewOffer){
        return res.status(404).send(`Interview offer with id ${id} is not found`)
    }
    await interviewOffer.remove()
    return res.status(200).send(interviewOffer)
}