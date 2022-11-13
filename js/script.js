import add from './dropdown.js'
"use strict";

console.log('sadsa')
// DECLARE ALL ELEMENT
const dropGroup = document.querySelectorAll(".dropdown-group");
const dropList = document.querySelectorAll(".dropdown-list");
const dropBtn = document.querySelectorAll(".dropdown-btn");
const langBtn = document.querySelectorAll(".lang-btn");
const langItem = document.querySelectorAll(".lang-item");

// GET STORAGE DATA
const flagData = localStorage.getItem("flag");
const nameData = localStorage.getItem("name");
const langData = localStorage.getItem("lang");
const dirData = localStorage.getItem("dir");


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


// DEFAULT LANGUAGE SETTING
document.querySelector("html").dir = dirData
document.querySelector("html").lang = langData

langBtn.forEach((item) => {
    item.querySelector("img").src = flagData
    item.querySelector("span").textContent = nameData
})


// FOR LANGUAGE DIRECTION
langItem.forEach((item) => {
    item.addEventListener("click", function (event) {
        langItem.forEach((allItems) => {
            allItems.classList.remove("active");
            console.log(allItems.getAttribute("data-dir"))
        })
        item.classList.add("active")

        // store data
        localStorage.setItem("flag", item.querySelector("img").getAttribute("src"));
        localStorage.setItem("name", item.querySelector("span").textContent);
        localStorage.setItem("lang", item.getAttribute("data-lang"));
        localStorage.setItem("dir", item.getAttribute("data-dir"));

        // get data
        const flagData = localStorage.getItem("flag");
        const nameData = localStorage.getItem("name");
        const langData = localStorage.getItem("lang");
        const dirData = localStorage.getItem("dir");

        // active button
        const btnElm = this.parentElement.previousElementSibling

        // active data
        document.querySelector("html").dir = dirData
        document.querySelector("html").lang = langData
        btnElm.querySelector("img").src = flagData
        btnElm.querySelector("span").textContent = nameData
    })
})
