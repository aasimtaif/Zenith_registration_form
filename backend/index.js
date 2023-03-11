const express = require('express');
const mongoose = require('mongoose');
const teamModel = require('./models/data.model')
const app = express();
const bodyParser = require('body-parser');
const port = 7000;
const cors = require('cors')


app.use(cors())
require('dotenv').config()

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));
const DB = process.env.DATABASE


mongoose.connect(DB).then(() => {
    console.log("Connected to Database")
}).catch(err => console.log(err, "error"))


app.post('/form', (req, res) => {
    teamModel(req.body).save().then(() => {
        console.log("Saved")
        res.send("hello postman")

    }).catch(err => console.log(err, "error"))

    res.send("hello postman")
    console.log(req.body)
})
app.get('/', (req, res) => {
    try{
        teamModel.find({}).then(data => {
            res.json(data)
        }).catch(error => {
            res.status(408).json({ error })
        })
    }catch(error){
        res.json({error})
    }
    res.send("Hello")
})
app.listen(port, () => {
    console.log(`Server listening at ${port} on PC`)
});
