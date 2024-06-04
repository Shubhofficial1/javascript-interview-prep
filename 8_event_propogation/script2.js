const div = document.querySelector(".div");
const form = document.querySelector(".form");
const button = document.querySelector(".button");

div.addEventListener("click", () => {
  alert("Div Event Clicked");
});

form.addEventListener("click", () => {
  alert("Form Event Clicked");
});

button.addEventListener("click", () => {
  alert("Button Event Clicked");
});

// Find a way to first trigger form , then button & then div

// User {capture:true} on form
