const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 0) {
    navbar.classList.replace("left-8", "left-24");
    navbar.classList.replace("right-8", "right-24");
  } else {
    navbar.classList.replace("left-24", "left-8");
    navbar.classList.replace("right-24", "right-8");
  }
});
