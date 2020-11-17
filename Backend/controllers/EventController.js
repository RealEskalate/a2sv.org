const { Event } = require('../models/Event')
const { paginate } = require('../utilities/util')

exports.addEvent = async(req, res) => {
    const event = new Event(req.body)
    await event.save()
    return res.status(201).send('Event saved successfully!')
}

exports.getAllEvents = async(req, res) => {
    const aggregation = []
    const query = Event.aggregate(aggregation)
    const paginatedResult = await paginate(req, query)
    return res.status(200).send(paginatedResult)
}

exports.getEventById = async (req, res) => {
    const { id } = req.params
    const event = await Event.findOne({_id: id})
    if(!event){
        return res.status(400).send('Information not found!')
    }
    return res.status(200).send(event)
}

exports.updateEvent = async (req, res) => {
    const { id } = req.params
    const event = await Event.findOne({_id: id})
    if(!event){
        return res.status(404).send(`Event with id ${id} is not found`)
    }
    event.set(req.body)
    await event.save()
    return res.status(200).send(event)
}

exports.addEventLink = async(req, res) => {
    const { id } = req.params
    if(!req.body.linkName || !req.body.link){
        return res.status(400).send('Link name or the link or both are missing')
    }
    const link = { name: req.body.linkName, link: req.body.link }
    const event = await Event.findOne({_id: id})
    if(!event){
        return res.status(404).send(`Event with id ${id} is not found`)
    }
    await Event.updateOne({_id: id}, {$push: {links: link}})
    return res.status(200).send('Event updated successfully!')
}

exports.deleteEvent = async (req, res) => {
    const { id } = req.params
    const event = await Event.findOne({_id: id})
    if(!event){
        return res.status(404).send(`Event with id ${id} is not found`)
    }
    await event.remove()
    return res.status(200).send(event)
}
