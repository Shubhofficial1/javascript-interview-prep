// Map is a function in javascript that returns a new array while applying a fucntion to each element of the original array

const nums = [1, 2, 3, 4];

const twiceNums = nums.map((num, i, arr) => num * 2);

console.log(nums);
console.log(twiceNums);
