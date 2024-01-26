const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
        ID:Number,
        OrderedItems:Number,
        Price: String,
        Status: String
});

module.exports = mongoose.model("Cart", cartSchema);