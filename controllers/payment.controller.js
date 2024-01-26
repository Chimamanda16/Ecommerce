const app = require("express");


let {Cart, ref, price} = require("../public/js/exports");
console.log(Cart, ref, price);

let success;


module.exports.createOrder = (req, res) => {

    if(ref & price){
        const cart = new Cart({
            ID:ref,
            OrderedItems: cartItems,
            Price: price,
            Status: Pending
        });
        try {
            const newCart = cart.save();
            res.status(201).json(newCart);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

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
