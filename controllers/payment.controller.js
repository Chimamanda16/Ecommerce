const Cart = require("../models/payment.model");

let success;

module.exports.orderService = {
    createOrder: async function(ref, price, cartItems){

        const cart = new Cart({
            ID:ref,
            OrderedItems: cartItems,
            Price: price,
            Status: "Pending"
        });
        try {
            const newCart = cart.save();
            console.log(newCart);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports.sendOrder = async(req, res) =>{

    if(success){
        try{
            const response = await Login.findOne({Email: username});
            res.send(response);
        }
        catch(error){
            console.error(error);
        }
    }
}
