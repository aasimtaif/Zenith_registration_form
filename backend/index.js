const express = require('express');
const mongoose = require('mongoose');
const teamModel = require('./models/data.model')
const app = express();
const port = 7000;
const cors = require('cors')


app.use(cors())
require('dotenv').config()

const DB = process.env.DATABASE

app.use(express.json())

mongoose.connect(DB).then(() => {
    console.log("Connected to Database")
}).catch(err => console.log(err, "error"))


app.post('/form', (req, res) => {
    teamModel(req.body).save().then(() => {
        console.log("Saved")
        res.send("hello postman")

    }).catch(err => console.log(err.messege, "error"))

    res.send("hello postman")
    console.log(req.body)
})
app.get('/', (req, res) => {
    res.send("Hello")
})
app.listen(port, () => {
    console.log(`Server listening at ${port} on PC`)
});
