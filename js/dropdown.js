"use strict";

// DECLARE ALL ELEMENT
const dropGroup = document.querySelectorAll(".dropdown-group");
const dropList = document.querySelectorAll(".dropdown-list");
const dropBtn = document.querySelectorAll(".dropdown-btn");


// FOR MULTIPLE DROPDOWN MENU
dropBtn.forEach((btnItem) => {
    btnItem.addEventListener("click", () => {
        const currentGroup = btnItem.closest(".dropdown-group");
        const currentList = currentGroup.querySelector(".dropdown-list");
        const currentActive = currentGroup.className.includes("active");

        if (currentActive) {
            currentGroup.classList.remove("active");
            currentList.classList.replace("block", "hidden");
        }
        else {
            dropGroup.forEach((groupItem) => {
                if (groupItem.className.includes("active")) {
                    groupItem.classList.remove("active");
                    groupItem.querySelector("ul").classList.replace("block", "hidden");
                }
            })
            currentGroup.classList.add("active");
            currentList.classList.replace("hidden", "block");
        }
    })
})


// FOR DROPDOWN HIDING CLICK OUTSIDE
document.addEventListener("click", (event) => {
    dropGroup.forEach((item) => {
        if (!item.contains(event.target)) {
            item.classList.remove("active");
            item.querySelector("ul").classList.replace("block", "hidden");
        }
    })
})