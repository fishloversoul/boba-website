const icon = document.querySelector(".mode-icon");

document.querySelector(".dark-toggle").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  icon.textContent = isDark ? "light_mode" : "dark_mode";
});
