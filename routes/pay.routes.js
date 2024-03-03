//Get request for the main page
require("dotenv").config();
const express = require('express');
const payRouter = express.Router();
const {orderService} = require("../controllers/payment.controller");
const secret = process.env.secretkey;


payRouter.post('/pay', (req, res) =>{
    ref = req.body.ref;
    const price = req.body.price;
    const cart = req.body.items;
    console.log(ref, price, cart);
    orderService.createOrder(ref, price, cart);
});


payRouter.post("/paystack/webhook", function(req, res){
        const event = req.body;
        // Do something with event
        if(event.event == "charge.success"){
            orderService.sendOrder(ref);
            const metadata = req.body.data.metadata;
            sendToDashboard(metadata);
        }
    else{
        console.log("Hash not equal");
    }
});

module.exports = payRouter;