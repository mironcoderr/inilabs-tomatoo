"use strict";

// backdrop variable
const backdrop = document.querySelector(".backdrop");

// cart variable
const cartBtn = document.querySelectorAll(".cart-btn");
const cartDiv = document.querySelector(".cart-div");
const cartClose = document.querySelector(".cart-close");

console.log(cartBtn);

// cart sidebar & backdrop open
cartBtn.forEach((btnItem) => {
    btnItem.addEventListener("click", function() {
        cartDiv.classList.add("active")
        backdrop.classList.add("active")
    })
})

// cart sidebar close via backdrop
backdrop.addEventListener("click", function() {
    cartDiv.classList.remove("active")
    backdrop.classList.remove("active")
})

// cart sidebar close via button
cartClose.addEventListener("click", function() {
    cartDiv.classList.remove("active")
    backdrop.classList.remove("active")
})
