const {Team,teamValidator} = require("../models/TeamModel.js");
const { paginate } = require('../utilities/util')
const mongoose = require("mongoose");

// getting all team member
exports.get_all_team = async (req, res) => {
    let filter = {};

    if(req.query.name){
        let re = new RegExp(req.query.name, 'i') 
        Object.assign(filter,{name : { $regex: re }})
    }

    if(req.query.email){
        filter.email = req.query.email;
    }

    if(req.query.title){
        filter.title = req.query.title;
    }


    const query =  Team.aggregate([{$match: filter}])
    const paginatedResult = await paginate(req, query)

    return res.send(paginatedResult);   
};


// get single team member
exports.get_member_by_id = async(req,res) => {
    const team = await Team.findById(req.params.id);
    return res.send(team);
};


// Post a team member
exports.post_member_data = async (req, res) => {
    const team = new Team(req.body);
    
    const notValid = teamValidator(team);
    if (notValid) {
        return res.status(422).send(notValid.message);
    }
    
    team._id = mongoose.Types.ObjectId()
    await team.save();

    return res.status(201).send(team);
};


// update a team
exports.update_team = async (req, res) => {
    let team = await Team.findById(req.params.id);
    if (!team) {
        return res.status(404).send("team member doesn't exist.");
    }

    team.set(req.body)

    const notValid = teamValidator(team);
    if (notValid) {
        return res.status(422).send(notValid.message);
    }

    await team.save()
    return res.status(200).send(team);
};


// Deleting a team member
exports.delete_a_member = async (req, res) => {
    let team = await Team.findByIdAndRemove(req.params.id);
    if (!team) {
        return res.status(404).send("team member not found");
    }

    return res.status(200).send(team);
};