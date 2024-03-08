const payBtn = document.querySelector(".btn-buy");
var ref;
var amt;
var cartItems;

function payBtnFunc(){
    cartItems = localStorage.getItem("cartItems");
    var cartTotal = localStorage.getItem("cartTotal");
    if (cartTotal) {
        amt = cartTotal;
    }
    if(cartItems){
        cartItems = JSON.parse(cartItems);
    }
}
payBtnFunc();

if(typeof ref === "undefined"){
    ref = ''+Math.floor((Math.random() * 1000000000) + 1);
}

if(payBtn){
    //Add the onclick function for the pay now button
    payBtn.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = "payment.html";
    });
}
export{ref, amt, cartItems};