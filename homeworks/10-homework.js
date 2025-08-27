// 10c
const button = document.querySelector(".js-button");
console.log(button.classList.contains("js-button"));

// 10f
// function buttons(selector) {
//   const buttonElement = document.querySelector(selector);
//   if (!buttonElement.classList.contains("is-toggled")) {
//     buttonElement.classList.add("is-toggled");
//   } else {
//     buttonElement.classList.remove("is-toggled");
//   }
// }

// 10 g
function buttons(selector) {
  const buttonElement = document.querySelector(selector);
  if (!buttonElement.classList.contains("is-toggled")) {
    turnOff();
    buttonElement.classList.add("is-toggled");
  } else {
    buttonElement.classList.remove("is-toggled");
  }
}

function turnOff() {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
