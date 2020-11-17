const { Information } = require('../models/Information')
const { paginate } = require('../utilities/util')
const _ = require('lodash')

exports.addInformation = async(req, res) => {
    const information = new Information(_.pick(req.body, ["title", "note"]))
    await information.save()
    if(req.body.description){
        await Information.updateOne({_id: information.id}, {$push: { description: req.body.description }});
    }
    return res.status(201).send('Information saved successfully!')
}

exports.getAllInformation = async(req, res) => {
    const aggregation = []
    const query = Information.aggregate(aggregation)
    const paginatedResult = await paginate(req, query)
    return res.status(200).send(paginatedResult)
}

exports.getInformationById = async (req, res) => {
    const { id } = req.params
    const information = await Information.findOne({_id: id})
    if(!information){
        return res.status(400).send('Information not found!')
    }
    return res.status(200).send(information)
}

exports.updateInformation = async (req, res) => {
    const { id } = req.params
    const information = await Information.findOne({_id: id})
    if(!information){
        return res.status(404).send(`Information with id ${id} is not found`)
    }
    information.set(req.body)
    await information.save()
    return res.status(200).send(information)
}

exports.deleteInformation = async (req, res) => {
    const { id } = req.params
    const information = await Information.findOne({_id: id})
    if(!information){
        return res.status(404).send(`Information with id ${id} is not found`)
    }
    await information.remove()
    return res.status(200).send(information)
}
