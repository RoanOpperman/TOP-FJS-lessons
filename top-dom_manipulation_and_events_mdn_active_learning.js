`use strict`;
console.log("LINKED: top-dom_manipulation_and_events_mdn_active_learning");

// Create and store all HTML elements

const shoppingListBody = document.querySelector("body");
const shoppingListContainer = document.createElement("div");
const shoppingListForm = document.createElement("div");
const listHeading = document.createElement("h1");
const listUserEntry = document.createElement("input");
const listUserEntryLabel = document.createElement("label");
const listBtnAddItem = document.createElement("button");

// Style and add text

shoppingListContainer.className = "container";
shoppingListForm.style["border"] = "1px, solid, gray";
shoppingListForm.style["width"] = "50%";
shoppingListForm.style["padding"] = "10px";
listHeading.textContent = "My shopping list";
listHeading.style["margin-top"] = "0px";
listUserEntryLabel.textContent = "Enter a new item:";
listUserEntry.style["margin"] = "3px";
listBtnAddItem.textContent = "Add item";
listUserEntry.value = "";

shoppingListBody.appendChild(shoppingListContainer);
shoppingListContainer.appendChild(shoppingListForm);
shoppingListForm.appendChild(listHeading);
shoppingListForm.appendChild(listUserEntryLabel);
shoppingListForm.appendChild(listUserEntry);
shoppingListForm.appendChild(listBtnAddItem);

const shoppingList = document.createElement("ul");

//Create adding and removing functionality to user list input
//User can press the add item button or hit the Enter key once they typed a list Item.

const addOrRemove = function () {
  let userInput = listUserEntry.value;
  const shoppingItem = document.createElement("li");
  shoppingItem.textContent = `${userInput}   `; //can style a gap between list item and delete button as apposed to forcing the gap this way
  shoppingItem.style["line-height"] = "2rem";
  shoppingList.appendChild(shoppingItem);
  listUserEntry.value = "";
  listUserEntry.focus();
  const removeShoppingItemBtn = document.createElement("button");
  removeShoppingItemBtn.textContent = "delete";
  removeShoppingItemBtn.addEventListener("click", () => {
    shoppingList.removeChild(shoppingItem);
  });
  shoppingItem.appendChild(removeShoppingItemBtn);
};

//Event listeners

listBtnAddItem.addEventListener("click", () => {
  console.log("button pressed");
  addOrRemove();
});

listUserEntry.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addOrRemove();
  }
});

shoppingListForm.appendChild(shoppingList);
