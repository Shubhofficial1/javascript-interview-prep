// Compose => right to left fn call executiosn
// Pipe => left to right fn call execution

const addFive = (num) => {
  return num + 5;
};

const substactTwo = (num) => {
  return num - 2;
};

const multiplyFour = (num) => {
  return num * 4;
};

// const evaluate = compose(addFive, substactTwo, multiplyFour);
// console.log(evaluate(5)); // 23

// Write a componse function to evaluate above expression :

function compose(...fns) {
  return function (init) {
    let result = init;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

const evaluate = compose(addFive, substactTwo, multiplyFour);
console.log(evaluate(5)); // 23

// Componse implementation Using inbuild methods :

function compose1(...fns) {
  return function (init) {
    return fns.reduceRight((acc, curr) => {
      return curr(acc);
    }, init);
  };
}

const evaluate1 = compose1(addFive, substactTwo, multiplyFour);
console.log(evaluate1(5)); // 23

// Pipe Implementation

function pipe(...fns) {
  return function (init) {
    let result = init;
    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

const evaluate2 = pipe(addFive, substactTwo, multiplyFour);
console.log(evaluate2(5));

//   Pipe Implementation using inbuild Reduce function :

function pipe1(...fns) {
  return function (init) {
    return fns.reduce((acc, curr) => {
      return curr(acc);
    }, init);
  };
}

const evaluate3 = pipe1(addFive, substactTwo, multiplyFour);
console.log(evaluate3(5)); //32
