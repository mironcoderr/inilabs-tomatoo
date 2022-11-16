const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach((btnItem)=> {
    btnItem.addEventListener("click", (event)=> {
        event.preventDefault();
        tabBtns.forEach(allBtns => allBtns.classList.remove("active"));
        event.target.classList.add("active");
    })
})