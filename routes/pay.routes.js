//Get request for the main page
const crypto = require("crypto");
const express = require("express");
require("dotenv").config();
const payRouter = express.Router();
const {orderService} = require("../controllers/payment.controller");
const secretKey = process.env.secretKey;
var ref;
var customerMail;

payRouter.post('/pay', (req, res) =>{
    customerMail = req.body.email
    ref = req.body.ref;
    const price = req.body.price;
    const cart = req.body.items;
    orderService.createOrder(ref, price, cart);
});

payRouter.post("/paystack/webhook", function(req, res){
    const event = req.body;
    const paystackSignature = req.headers["x-paystack-signature"];
    const hash = crypto.createHmac('sha512', secretKey).update(JSON.stringify(event)).digest('hex');
    if(hash == paystackSignature){
        if(event.event == "charge.success"){
            orderService.sendOrder(ref, customerMail);
            console.log("Charge successful"); 
        }
        else{
            console.log("Customer not successfully charged!");
        }
        res.sendStatus(200);
    }
    else {
        // Invalid signature, reject the request
        console.error('Invalid signature. Webhook event rejected.');
        res.sendStatus(403).end();
    }
});

module.exports = payRouter;