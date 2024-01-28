import {ref, amt} from "./exports.js";

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
document.getElementById("amount").innerText = amt;

function payWithPaystack(e) {
    e.preventDefault();
    let handler = PaystackPop.setup({
        key: 'pk_test_68f7973b53eb29db78b0e49928c4fc8a3a3d37b4', // Replace with your public key
        currency: "NGN",
        email: document.getElementById("email-address").value,
        amount: amt * 100,
        ref: ref,
        onClose: function(){
            alert('Window closed.');
        },
        callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            if (response.data.status === 'success') {
              fetch("/pay", {
                method: "get",
                headers: new Headers({"content-Type": "application/json"}),
            })
            .then((res) =>{
                res.json();
            })
            .catch((error) =>{
                console.error(error);
            });
                window.location.href = 'success.html';
            }
        }
    });

    handler.openIframe();
}
