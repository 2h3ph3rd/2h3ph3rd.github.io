// Elements
const themeToggleBtn = document.getElementById("theme-toggle");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// Load saved theme
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkIcon.classList.add("hidden");
  lightIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
  lightIcon.classList.add("hidden");
  darkIcon.classList.remove("hidden");
}

// Toggle theme
themeToggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  } else {
    localStorage.setItem("theme", "light");
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
  }
});
