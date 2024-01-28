const Cart = require("../models/payment.model");

module.exports.orderService = {
    createOrder: async function(ref, price, cartItems){
        const cart = new Cart({
            OrderID: ref,
            OrderedItems: cartItems,
            Price: price,
            Status: "Pending"
        });
        try {
            cart.save();
        } catch (err) {
            console.error(err);
        }
    },

    sendOrder: async function(ref){
        console.log("level 1");
        try{
            console.log("level 2");
            Cart.findOneAndUpdate({OrderID: ref},{Status: "Success"});

            Cart.findOne({OrderID: ref})
            .then(function(response){
                console.log(response);        
            });
                
        }
        catch(error){
            console.error(error);
        }
    }

}