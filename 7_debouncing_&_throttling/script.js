// Debouncing & throttling implementation in JS

// Ques 1 : Create a button UI and add debounce as follows
// => Show Button Pressed <X> Times every time button is pressed
//  => Increase Triggered <Y> Times count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const pressedPara = document.querySelector(".increment_pressed");
const triggerPara = document.querySelector(".increment_trigger");

var pressedCount = 0;
var triggerCount = 0;

const myDebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debouncedCount = _.debounce(() => {
  triggerPara.innerHTML = ++triggerCount;
}, 800);

// Custom Debounce implementation

// const debouncedCount = myDebounce(() => {
//   triggerPara.innerHTML = ++triggerCount;
// }, 800);

btn.addEventListener("click", () => {
  pressedPara.innerHTML = ++pressedCount;
  debouncedCount();
});

// Ques 2 : Create a button UI and add throttle as follows
// => Show Button Pressed <X> Times every time button is pressed
//  => Increase Triggered <Y> Times count every 800ms of throttle

const btn1 = document.querySelector(".increment_btn1");
const pressedPara1 = document.querySelector(".increment_pressed1");
const triggerPara1 = document.querySelector(".increment_trigger1");

var pressedCount1 = 0;
var triggerCount1 = 0;

const myThrottle = (cb, delay) => {
  var last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};

const throttleCount = _.throttle(() => {
  triggerPara1.innerHTML = ++triggerCount;
}, 800);

// Custom Throttle Implementation
// const throttleCount = _.throttle(() => {
//   triggerPara1.innerHTML = ++triggerCount;
// }, 800);

btn1.addEventListener("click", () => {
  pressedPara1.innerHTML = ++pressedCount;
  throttleCount();
});
