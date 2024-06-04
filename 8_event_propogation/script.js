const div = document.querySelector(".div");
const form = document.querySelector(".form");
const button = document.querySelector(".button");

// div.addEventListener("click", () => {
//   alert("Div Event Clicked");
// });

// form.addEventListener("click", () => {
//   alert("Form Event Clicked");
// });

// button.addEventListener("click", () => {
//   alert("Button Event Clicked");
// });

// ---------------------------------------

// Difference between event.target vs this.target vs event.currentTarget

// div.addEventListener("click", click);
// form.addEventListener("click", click);
// button.addEventListener("click", click);

function click(event) {
  alert(
    "CurrentTarget : " +
      event.currentTarget.tagName +
      "   target : " +
      event.target.tagName +
      "   this : " +
      this.tagName
  );
}

// Event.target refers to the element that has triggered the event

// "this.target" refers to the element to which the event listener is attached i.e the current context

// event.cuurenttarget refer to the element that is currently holding the event during capture/bubble phase
