const payBtn = document.querySelector(".btn-buy");
var ref;
var amt;
var cartItems;

function payBtnFunc(){
    cartItems = localStorage.getItem("cartItems");
    var cartTotal = localStorage.getItem("cartTotal");
    ref = ''+Math.floor((Math.random() * 1000000000) + 1);
    if (cartTotal) {
        amt = cartTotal;
    }
    if(cartItems){
        cartItems = JSON.parse(cartItems);
    }
}
payBtnFunc();

if(payBtn){
    //Add the onclick function for the pay now button
    payBtn.addEventListener("click", function(event){
        event.preventDefault();
        payBtnFunc();
        fetch("/pay", {
            method: "post",
            headers: new Headers({"content-Type": "application/json"}),
            body: JSON.stringify({
                items: cartItems,
                ref: ref,
                price: amt
            }), 
        })
        .then((res) =>{
            res.json();
        })
        .catch((error) =>{
            console.error(error);
        });
        window.location.href = "payment.html";
    });
}
export{ref, amt, cartItems};