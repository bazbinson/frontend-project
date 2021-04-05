// les helpers
function $(expr, con) {
  return typeof expr === "string"
    ? (con || document).querySelector(expr)
    : expr;
}

function $$(expr, con) {
  return Array.prototype.slice.call((con || document).querySelectorAll(expr));
}

window.addEventListener("DOMContentLoaded", function () {
  var blade = $(".lightsaber__blade");
  var btns = $$(".shop__lightsaber button");
  btns.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.id === "blue") {
        blade.style.boxShadow = "inset 0 0 15px #84cee4, 0 0 20px #0268e6";
        if (window.matchMedia("(min-width: 650px)").matches) {
          blade.style.width = "200%";
        }
      } else if (this.id === "red") {
        blade.style.boxShadow = "inset 0 0 15px #df5837, 0 0 20px #ad3434";
        if (window.matchMedia("(min-width: 650px)").matches) {
          blade.style.width = "200%";
        }
      } else if (this.id === "green") {
        blade.style.boxShadow = "inset 0 0 15px #9ddf76, 0 0 20px #6b9b4f";
        if (window.matchMedia("(min-width: 650px)").matches) {
          blade.style.width = "200%";
        }
      } else {
        // C'est forcément le bouton "Eteindre"
        blade.style.width = "0";
        setTimeout(function () {
          blade.style.boxShadow = "none";
        }, 500);
      }
    });
  });
});
