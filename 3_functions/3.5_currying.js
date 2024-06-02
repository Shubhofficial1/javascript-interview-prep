// Implement Sum(1)(2)
function Sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(Sum(1)(2));

// Implement sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

// Implement Curry function for below operations :

// Evaluate("Sum")(4)(2)
// Evaluate("Multiply")(4)(2)
// Evaluate("Divide")(4)(2)
// Evaluate("Substract")(4)(2)

function Evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "Sum") return a + b;
      if (operation === "Multiply") return a * b;
      if (operation === "Divide") return a / b;
      if (operation === "Substract") return a - b;
      return "Invalid Operation";
    };
  };
}

console.log(Evaluate("Sum")(4)(2));
console.log(Evaluate("Multiply")(4)(2));
console.log(Evaluate("Divide")(4)(2));
console.log(Evaluate("Substract")(4)(2));
console.log(Evaluate("None")(4)(2));

// Infinite Currying => infiniteSum(2)(4)(6)(8)(10)()

function infiniteSum(a) {
  return function (b) {
    if (b) {
      return infiniteSum(a + b);
    }
    return a;
  };
}

console.log(infiniteSum(2)(4)(6)(8)(10)());

// Example of partial application => implement partialApplicationSum(1)(5, 6) => 12

function partialApplicationSum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(partialApplicationSum(1)(5, 6));
