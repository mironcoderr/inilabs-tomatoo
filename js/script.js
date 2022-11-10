// FOR DROPDOWN MENU XPAND
document.querySelectorAll(".dropdown-btn").forEach((btn)=> {
    btn.addEventListener("click", (event)=> {
        const group = btn.closest(".dropdown");
        const list = btn.closest(".dropdown").querySelector(".dropdown-list");
        const check = group.className.includes("active");

        if(!check) {
            group.classList.add("active");
            list.classList.replace("hidden", "block");
        }
        else {
            group.classList.remove("active");
            list.classList.replace("block", "hidden");
        }
    })
})

// FOR DROPDOWN OFF
document.addEventListener("mousedown", (event)=> {
    const parent = document.querySelectorAll(".dropdown");
    const child = document.querySelectorAll(".dropdown-list");

    parent.forEach((parentItem)=> {
        if(!parentItem.contains(event.target)) {
            child.forEach((childItem)=> {
                childItem.classList.replace("flex", "hidden");
            })
        }
    })
})
