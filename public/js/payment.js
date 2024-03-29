import {ref, amt, cartItems} from "./exports.js";

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
document.getElementById("amount").innerText = amt;
var customerMail = document.getElementById("email-address").value;

document.addEventListener('DOMContentLoaded', function () {
    fetch("/pay", {
        method: "post",
        headers: new Headers({"content-Type": "application/json"}),
        body: JSON.stringify({
            items: cartItems,
            ref: ref,
            price: amt,
            email: customerMail
        }),
    })
    .then((res) =>{
        res.json();
    })
    .catch((error) =>{
        console.error(error);
    });
});

function payWithPaystack(e) {
    e.preventDefault();
    let handler = PaystackPop.setup({
        key: 'pk_test_68f7973b53eb29db78b0e49928c4fc8a3a3d37b4',
        currency: "NGN",
        email: document.getElementById("email-address").value,
        amount: amt * 100,
        ref: ref,
        metadata:{
            billingDetails:{
                phone: document.getElementById("phone-number").value,
                street: document.getElementById("street-name").value,
            },
            orderDetails:{
                OrderID: ref,
                OrderedItems: cartItems,
                Price: amt,
            }
        },
        onClose: function(){
            alert('Window closed.');
        },
        callback: function(response){
            console.log(response);
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            if (response.status === 'success') {
                console.log(response);
                window.location.href = 'success.html';
            }
        }
    });

    handler.openIframe();
}
