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
        try{
            Cart.findOneAndUpdate({OrderID: ref},{Status: "Success"})
            .then(function(response){
                console.log("Order status changed");
            })
            .catch(function(err){
                console.error(err);
            });

            Cart.findOne({OrderID: ref})
            .then(function(response){   
                     
            })
            .catch(function(err){
                console.error(err);
            });
                
        }
        catch(error){
            console.error(error);
        }
    }

}