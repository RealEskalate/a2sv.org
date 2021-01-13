const { Information } = require('../models/Information')
const { paginate } = require('../utilities/util')

exports.addInformation = async(req, res) => {
    const information = new Information(req.body)
    await information.save()
    return res.status(201).send(information)
}

exports.getAllInformation = async(req, res) => {
    let filter = {}
    if (req.query.phase) {
        filter.phase = req.query.phase;
    }

    const query = Information.aggregate([{$match: filter}])
    const paginatedResult = await paginate(req, query)
    return res.status(200).send(paginatedResult)
}

exports.getInformationById = async (req, res) => {
    const { id } = req.params
    const information = await Information.findOne({_id: id})
    if(!information){
        return res.status(404).send('Information not found!')
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
