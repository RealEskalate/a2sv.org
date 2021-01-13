const { Event } = require('../models/Event')
const { paginate } = require('../utilities/util')

exports.addEvent = async(req, res) => {
    const event = new Event(req.body)
    await event.save()
    return res.status(201).send(event)
}

exports.getAllEvents = async(req, res) => {
    let filter = {}
    if (req.query.phase) {
        filter.phase = req.query.phase;
    }
    const query = Event.aggregate([{$match: filter}])
    const paginatedResult = await paginate(req, query)
    return res.status(200).send(paginatedResult)
}

exports.getEventById = async (req, res) => {
    const { id } = req.params
    const event = await Event.findOne({_id: id})
    if(!event){
        return res.status(404).send('Event not found!')
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

    const link = req.body
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
