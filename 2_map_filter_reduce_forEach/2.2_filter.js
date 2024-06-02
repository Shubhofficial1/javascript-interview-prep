// Filter is a function in javascript that returns a new array while appying a callback function to each element of the original array. if the callback returns true , the element is being pushed to the output array else it is not pushed.

const nums = [10, 20, 30, 40, 50];

const greatorThan25 = nums.filter((num, i, arr) => num > 25);

console.log(nums);
console.log(greatorThan25);
