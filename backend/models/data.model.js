const mongoose = require('mongoose')
const teamSchema = new mongoose.Schema({
    college_name: String,
    college_location: String,
    sport: String,
    captains_Phone_no: String,
    payment_screenshot: String,
    id_card: String,
    captains_name: String,

})

const teamModel = mongoose.model('Team', teamSchema)
module.exports = teamModel

// sport:String,
// sportssecretary_name:String,
// sportssecretary_Phone_no:Number,
// sportssecretary_email:String,
// captains_Phone_no:Number,
// captains_name:String,
// captains_email:String,
