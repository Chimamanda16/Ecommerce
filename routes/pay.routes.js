//Get request for the main page
const express = require('express');
const payRouter = express.Router();
const createOrder = require("../controllers/payment.controller");

payRouter.get('/pay', (req, res) =>{
    createOrder;
});

module.exports = payRouter;