Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const nums = [10, 20, 30, 40, 50];

const greatorThan25 = nums.myFilter((num, i, nums) => num > 25);

console.log(greatorThan25);
