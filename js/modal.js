"use strict";

const modalClose = document.querySelector(".modal-close");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalDiv = document.querySelector(".modal-div");

modalBtn.forEach((btnItem)=> {
    btnItem.addEventListener("click", function() {
        modalDiv.classList.add("active");
        document.querySelector(".backdrop").classList.add("active");
    })
})

document.querySelector(".backdrop").addEventListener("click", function() {
    modalDiv.classList.remove("active");
    document.querySelector(".backdrop").classList.remove("active");
})

modalClose.addEventListener("click", function() {
    modalDiv.classList.remove("active");
    document.querySelector(".backdrop").classList.remove("active");
})