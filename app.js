const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/index.routes.js");
const PORT = 3000;

require("dotenv").config();

app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);

mongoose
    .connect(process.env.mongo)
    .then(function(res){
        app.listen(PORT, function(){
            console.log("Server started on port 3000");
        });
    }).catch(function(err){
        console.log(err);
});