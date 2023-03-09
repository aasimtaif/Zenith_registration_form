const mongoose = require('mongoose')
const teamSchema = new mongoose.Schema({
    college_name:String,
    sport:String,
    sportssecretary_name:String,
    sportssecretary_Phone_no:Number,
    sportssecretary_email:String,
    captains_Phone_no:Number,
    captains_name:String,
    captains_email:String,
    college_location:String,
})

const teamModel = mongoose.model('Team', teamSchema)
module.exports = teamModel