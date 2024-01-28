const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
        OrderID:{
            type: Number,
            required: true
        },
        OrderedItems: [{
                img: {
                    type: String,
                    required: true
                },
                price: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: String,
                    required: true
                }
            }],
        Price: {
            type: Number,
            required: true
        },
        Status: {
            type: String,
            required: true
        }
});

module.exports = mongoose.model("Cart", cartSchema);