// 12a
const add = function () {
  console.log(2 + 3);
};
add();
add();

// 12b
function runTwice(fun) {
  fun();
  fun();
}

runTwice(function () {
  console.log("12b");
});

runTwice(add);

// 12q
document.querySelector(".js-button").addEventListener("click", () => {
  update();
});

// 12c
function update() {
  const button = document.querySelector(".js-button");

  // 12d
  button.innerHTML = "Loading...";
  setTimeout(() => {
    button.innerHTML = "Finished!";
  }, 1000);
}

// 12e, 12f
let timeoutId;

function message() {
  const par = document.querySelector(".js-message");
  par.innerHTML = "Added";

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    par.innerHTML = "";
  }, 2000);
}

// 12g, 12h, 12i
document.title = "App";

let messages = 2;
let intervalId;

let isDisplayingNotification;

displayNotification();

function displayNotification() {
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(function () {
    if (document.title === "App") {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = "App";
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = "App";
}

// document.querySelector(".js-add-button").addEventListener("click", () => {
//   messages++;
//   displayNotofication();
// });

// 12j, 12k
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
console.log(multiply(7, 10));

// 12l
function countPositive(nums) {
  let positiveNumbers = 0;

  nums.forEach((num) => {
    if (num > 0) {
      positiveNumbers++;
    }
  });

  return positiveNumbers;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 12m
function addNum(array, num) {
  return array.map((value) => value + num);
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

// 12n, 12o
function removeEgg(foods) {
  let removedEggs = 0;

  return foods.filter((food) => {
    if (food === "egg" && removedEggs < 2) {
      removedEggs++;
      return false;
    }
    return true;
  });
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "halm"]));
