document.addEventListener("DOMContentLoaded", () => {
  const toggleElement = document.querySelector("header > p"); // Target header > p
  const htmlElement = document.documentElement;

  // Load saved theme from localStorage or fallback to system preference
  let savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    localStorage.setItem("theme", savedTheme); // Save initial theme to localStorage
  }

  htmlElement.setAttribute("data-theme", savedTheme);

  // Toggle dark mode on click
  toggleElement.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save new theme to localStorage
  });
});
