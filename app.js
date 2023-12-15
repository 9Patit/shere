let data = document.getElementById("number-text");
let price = document.getElementById("pts");
let cart = document.getElementById("cart");

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
}

function updateCart(currentValue) {
    cart.innerText = currentValue;
}

