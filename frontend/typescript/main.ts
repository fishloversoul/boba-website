const mode = document.querySelector(".mode-toggle") as HTMLElement | null;

if (!mode) throw new Error("Missing dark mode elements");

function toggleMode(enabled: boolean): void {
  document.body.classList.toggle("dark", enabled);
  localStorage.setItem("darkMode", enabled ? "1" : "0");
  mode!.textContent = enabled ? "light_mode" : "dark_mode";
}

toggleMode(localStorage.getItem("darkMode") === "1");

mode.addEventListener("click", () => {
  toggleMode(!document.body.classList.contains("dark"));
});
