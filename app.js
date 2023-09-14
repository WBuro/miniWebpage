//DARK THEMA

const themeButton = document.getElementById("themeButton");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
}

themeButton.addEventListener("click", function() {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  const currentTheme = body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);

  const icon = themeButton.querySelector(".icon");
  icon.classList.toggle("light-icon", currentTheme === "light");
  icon.classList.toggle("dark-icon", currentTheme === "dark");
});

