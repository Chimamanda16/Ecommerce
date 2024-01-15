//Get request for the main page
const express = require('express');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) =>{
    res.sendFile(__dirname + "index");
    console.log("sent");
});

module.exports = homeRouter;