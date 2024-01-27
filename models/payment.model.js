const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
        ID:{Number},
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
        Price: String,
        Status: String
});

module.exports = mongoose.model("Cart", cartSchema);