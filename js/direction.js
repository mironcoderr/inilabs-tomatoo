"use strict";

// DECLARE ALL ELEMENT
const langBtn = document.querySelectorAll(".lang-btn");
const langItem = document.querySelectorAll(".lang-item");


// GET STORAGE DATA
const flagData = localStorage.getItem("flag");
const nameData = localStorage.getItem("name");
const langData = localStorage.getItem("lang");
const dirData = localStorage.getItem("dir");


// DEFAULT LANGUAGE SETTING
if (dirData != null && langData != null) {
    document.querySelector("html").dir = dirData
    document.querySelector("html").lang = langData
}

langBtn.forEach((item) => {
    if (flagData != null && nameData != null) {
        item.querySelector("img").src = flagData
        item.querySelector("span").textContent = nameData
    }
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