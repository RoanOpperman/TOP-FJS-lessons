"use strict";
console.log(`hello world`);

const isRefused = document.getElementById("para");
const isGuest = document.getElementById("guestList");
const people = ["Emma", "Jack", "Lola", "Mia", "Liam", "Phil", "Ava", "Noah"];
const rejects = ["Phil", "Lola", "Mia", "Emma"];

for (const person of people) {
  let switchRefusedOn = false;
  for (let i = 0; i < rejects.length; i++) {
    if (rejects[i] === person) {
      switchRefusedOn = true;
      break;
    }
  }
  console.log(switchRefusedOn);
  if (switchRefusedOn) {
    isRefused.textContent += ` ${person}`;
  } else {
    isGuest.textContent += ` ${person}`;
  }
}
