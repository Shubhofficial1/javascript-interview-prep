const myThrottle = (cb, delay) => {
  var last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};
