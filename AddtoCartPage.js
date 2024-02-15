let cartItemsConatiner = document.getElementById("cartItemsConatiner");
let cartItemTextInput = document.getElementById("cartItemTextInput");

function addBtn() {
    let cartItemTextInputValue = cartItemTextInput.value;
    let listItemE1 = document.createElement("li");
    listItemE1.textContent = cartItemTextInputValue;
    listItemE1.classList.add("list-item");
    cartItemTextInput.value = "";
    cartItemsConatiner.appendChild(listItemE1);
}