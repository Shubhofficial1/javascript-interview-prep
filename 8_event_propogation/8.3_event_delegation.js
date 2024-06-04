// Event delgation is a technique where a parent element listen for event on behalf of child element

// in Below code , the parent element with class "products" listens for click event & check if the clicked target is a span element . redirecting to a specific URL based on the span's class

// <div class="products">
//   <span class="mobile">Mobile</span>
//   <span class="ac">ac</span>
//   <span class="watch">watch</span>
// </div>;

// JS

// document.querySelector(".products").addEventListener("click", (event) => {
//   console.log(event.target.tagName);
//   if (event.target.tagName === "SPAN") {
//     window.location.href += event.target.className;
//   }
// });
