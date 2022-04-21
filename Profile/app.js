// dark mode
let currentTheme = localStorage.getItem("theme")

if(currentTheme === "dark"){
  document.body.classList("dark-theme")
}

let changeTheme = document.getElementById("change-theme");

changeTheme.onclick = function myDarkThemeClick(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    localStorage.setItem(theme, "dark")
  }
}