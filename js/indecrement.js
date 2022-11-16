const indecGroup = document.querySelectorAll(".indec-group");

indecGroup.forEach((groupItem)=> {
    const indecPlus = groupItem.querySelector(".indec-plus");
    const indecValue = groupItem.querySelector(".indec-value");
    const indecMinus = groupItem.querySelector(".indec-minus");

    if(indecValue.value != 1) indecMinus.textContent = "remove";
    else indecMinus.textContent = "delete";
    
    indecPlus.addEventListener("click", function() {
        indecValue.value++
        if(indecValue.value > 1) {
            indecMinus.textContent = "remove"
        }
    })

    indecMinus.addEventListener("click", function() {
        if(indecValue.value >= 2) {
            indecValue.value--
            if(indecValue.value == 1) {
                indecMinus.textContent = "delete"
            }
        }
    })
})