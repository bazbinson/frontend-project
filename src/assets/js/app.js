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
        blade.style.boxShadow = "inset 0 0 10px #84cee4, 0 0 20px #0268e6";
        blade.style.width = "750px";
      } else if (this.id === "red") {
        blade.style.boxShadow = "inset 0 0 10px #df5837, 0 0 20px #ad3434";
        blade.style.width = "750px";
      } else if (this.id === "green") {
        blade.style.boxShadow = "inset 0 0 10px #9ddf76, 0 0 20px #6b9b4f";
        blade.style.width = "750px";
      } else {
        blade.style.width = "0";
        setTimeout(function () {
          blade.style.boxShadow = "none";
        }, 500);
      }
    });
  });
});
