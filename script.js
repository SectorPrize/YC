"use strict";

let products = document.querySelectorAll(".prod");
let cart = document.querySelector(".cart");
let meat = document.querySelector(".meat");
let body = document.querySelector("body");
let button = document.querySelector(".btn");

let product;

let copy;
let count = 0;
products.forEach((element) => {
  element.addEventListener("dragstart", function () {
    product = this;
    product.style.visibility = "hidden";
    product.style.transition = "0.001s";
    copy = 0;

    element.addEventListener("dragend", function () {
      if (!copy) {
        product.style.visibility = "visible";
      }
    });
  });
});

cart.addEventListener("dragover", function (event) {
  event.preventDefault();
});

cart.addEventListener("drop", function () {
  product.style.position = "relative";
  product.style.marginLeft = "-4.095vw";
  product.style.marginBottom = "1.4vw";
  product.style.marginRight = "0px";
  product.style.scale = "1.3";
  copy = product.cloneNode(true);
  copy.style.visibility = "visible";
  this.appendChild(copy);
  count += 1;
  console.log(count);
  if (count >= 3) {
    button.classList.add("btnApp");
  }
});

button.addEventListener("mouseover", function () {
  button.style.scale = "1.2";
  button.style.boxShadow = "0px 0px 1vw 0.5vw rgb(72, 68, 68)";
});
button.addEventListener("mouseout", function () {
  button.style.scale = "1";
  button.style.boxShadow = "";
});
