let data = document.getElementById("number-text");
let price = document.getElementById("pts");
let cart = document.getElementById("cart");
let pp = document.getElementById("pp");

function increase() {
  let currentValue = parseInt(data.innerText, 10);
  currentValue++;
  data.innerText = currentValue;
  updatePrice(currentValue); 
}

function deleteb() {
  let currentValue = parseInt(data.innerText, 10);
  currentValue--;
  data.innerText = currentValue;
  updatePrice(currentValue); 
}

function updatePrice(currentValue) {
  price.innerText = currentValue * 125; 
  pp.innerText = currentValue * 250;
}

function updateCart(currentValue) {
    cart.innerText = currentValue;
}

