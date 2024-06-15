const modalButton = document.querySelector(".modalButton");
const overlay = document.querySelector(".overlay");

function toogleModal(toggle) {
  overlay.style.display = toggle ? "flex" : "none";
}

modalButton.addEventListener("click", () => {
  toogleModal(true);
});

overlay.addEventListener("click", (e) => {
  if (e.target.className === "overlay") {
    toogleModal(false);
  }
});
