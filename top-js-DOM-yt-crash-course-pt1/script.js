`use strict`;
console.log("index.html & script.js are connected");
//select the add item button
//?is it a submit or a regular button: according to the HTML a regular button.
const buttonToAddListItem = document.getElementById("btn-add-list-item");
const dltBtn = document.querySelectorAll(".delete-btn");
//select ul element
//Let delete button remove list items
const addListItem = function () {
  //create li element with input and delete button
  const containerListItems = document.querySelector("#list-container");
  const newListItem = document.createElement("li");
  newListItem.textContent = document.querySelector("#item-input").value;
  //add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "X";
  newListItem.appendChild(deleteBtn);
  containerListItems.appendChild(newListItem);
};
buttonToAddListItem.addEventListener("mouseup", addListItem);
