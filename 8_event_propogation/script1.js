const div = document.querySelector(".div");
const form = document.querySelector(".form");
const button = document.querySelector(".button");

div.addEventListener(
  "click",
  () => {
    alert("Div Event Clicked");
  },
  {
    capture: true,
  }
);

form.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    alert("Form Event Clicked");
  },
  {
    capture: true,
  }
);

button.addEventListener(
  "click",
  () => {
    alert("Button Event Clicked");
  },
  {
    capture: true,
  }
);

// How to stop event Capturing/bubbling

// We can use event.stopPropogation method to prevent those  // remove {capture:true}
