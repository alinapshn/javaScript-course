// 11a
// let nums = [10, 20, 30];
// console.log(nums);

// nums[2] = 99;
// console.log(nums);

// 11b
function getLastValue(array) {
  let lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(["hi", "hello", "good"]));

// 11c
function arraySwap(array) {
  const lastIndex = array.length - 1;
  const firstValue = array[0];
  const lastValue = array[lastIndex];
  array[0] = lastValue;
  array[lastIndex] = firstValue;
  return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "good"]));

// 11d
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 11e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 11g
const nums = [1, 2, 3];
const numsIncreased = [];

for (let i = 0; i < nums.length; i++) {
  let num = nums[i];
  numsIncreased.push(num + 1);
}

console.log(numsIncreased);

// 11h
function addOne(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    result.push(num + 1);
  }
  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

// 11i
function addNum(array, num) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let nums = array[i];
    result.push(nums + num);
  }
  return result;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

// 11j
function addArrays(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    let num1 = array1[i];
    let num2 = array2[i];
    result.push(num1 + num2);
  }
  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

// 11k
function countPositive(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }
  return result;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 11l, 11m
function minMax(nums) {
  let result = {
    min: null,
    max: null,
  };
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (result.max === null || value > result.max) {
      result.max = value;
    }
    if (result.min === null || value < result.min) {
      result.min = value;
    }
  }
  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

// 11m
console.log(minMax([]));
console.log(minMax([3]));

// 11n
function countWords(words) {
  let result = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  return result;
}

console.log(countWords(["apple", "grape", "apple", "apple"]));
