const Cart = require("../models/payment.model");
const nodemailer = require("nodemailer");
const myMail = process.env.myMail
const nodePass = process.env.emailPass;
var mailBody;

//Setting up Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: false,
    auth: {
      user: myMail,
      pass: nodePass,
    },
});

module.exports.orderService = {
    createOrder: async function(ref, price, cartItems){
        try{
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
        }
        catch(error){
            console.error(error);
        }
    },

    
    sendOrder: async function(ref){
        try{
            Cart.findOneAndUpdate({OrderID: ref},{Status: "Success"})
            .then(function(response){
                mailBody = response;
                console.log("Order status changed");
                //Nodemailer Options
                const mailOptions = {
                    from: {
                        address: myMail
                    },
                    to: [email, myMail],
                    subject: "Cool Cicks Order Confirmation",
                    text: mailBody
                };

                //Send email  
                const sendMail = async (transporter, mailOptions) =>{
                    try{
                        await transporter.sendMail(mailOptions);
                    }
                    catch(err){
                        console.error(err);
                    }
                }
                sendMail(transporter, mailOptions);

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