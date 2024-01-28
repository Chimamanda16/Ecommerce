//Get request for the main page
const express = require('express');
const payRouter = express.Router();
const {orderService} = require("../controllers/payment.controller");
var ref;

payRouter.post('/pay', (req, res) =>{
    ref = req.body.ref;
    const price = req.body.price;
    const cart = req.body.items;
    orderService.createOrder(ref, price, cart);
});

payRouter.get("/pay", (req, res) =>{
    orderService.sendOrder(ref);
});

module.exports = payRouter;