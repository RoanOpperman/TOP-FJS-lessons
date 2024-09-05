"use strict";

const output = document.querySelector(".output");

function createAParagraph(printCountDownText) {
  const aHTMLparagraph = document.createElement("p");
  aHTMLparagraph.textContent = printCountDownText;
  output.appendChild(aHTMLparagraph);
}

const countDownFromTen = 10;
let countDown = countDownFromTen;
while (countDown > 0) {
  if (countDown === 10) {
    createAParagraph("Countdown:" + countDown);
    countDown--;
  }
  createAParagraph(countDown);
  countDown--;
}
createAParagraph("Blast-off!!!");
