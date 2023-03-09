const mongoose = require('mongoose')
const teamSchema = new mongoose.Schema({
    collegename:String,
    sport:String,
})

const teamModel = mongoose.model('Team', teamSchema)
module.exports = teamModel