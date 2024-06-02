// Map vs ForEach

// Map basically returns a new array after applying function callback to each element of the original array
// forEach executes the provided fn to each element in the original array

// Map returns a new array
// forEach return undefined

// Map does not mutate the original array , while forEach can be used to modify original array of callback allows

// Map can be chained to another array methods , while forEach can't be chained since it returns undefined

// Eg :

const nums = [1, 2, 3, 5];

const numsMap = nums.map((num) => {
  return num * 2;
});
console.log(nums);
console.log(numsMap);

nums.forEach((num, i, nums) => (nums[i] = num * 3));
console.log(nums);
