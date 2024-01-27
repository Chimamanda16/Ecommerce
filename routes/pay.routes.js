//Get request for the main page
const express = require('express');
const payRouter = express.Router();
const {orderService} = require("../controllers/payment.controller");

payRouter.post('/pay', (req, res) =>{
    const ref = req.body.ref;
    const price = req.body.price;
    const cart = req.body.items;
    orderService.createOrder(ref, price, cart);
});

module.exports = payRouter;