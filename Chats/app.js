// dark mode
// let currentTheme = localStorage.getItem("theme")

// if(currentTheme === "dark"){
//   document.body.classList("dark-theme")
// }

// let changeTheme = document.getElementById("change-theme");

// changeTheme.onclick = function myDarkThemeClick(){
//   document.body.classList.toggle("dark-theme");
//   if(document.body.classList.contains("dark-theme")) {
//     localStorage.setItem(theme, "dark")
//   }
// }


$(document).ready(function(){
  $("#change-theme").on('click', function(){
      let currentTheme = $("html").attr("data-theme");
      if(currentTheme === "dark"){
          $("html").attr("data-theme", "light");
      }
      else if (currentTheme === "light"){
          $("html").attr("data-theme", "dark");
      }
  })
})

// after sign in 
let username = localStorage.getItem("userName")
let accountName = localStorage.getItem("accountName")
let profile = localStorage.getItem("profilePic")

let account = document.getElementById("account")
let writePost = document.getElementById("write-post")
if ( username == null){
    account.innerHTML +=`
        <i class="fas fa-solid fa-universal-access"></i>
        <a href="./login/login.html" id="accountName">Login</a>
    `
    writePost.innerHTML += `
        <i class="fas fa-solid fa-user"></i>
        <input type="text" placeholder="What happened?" id="post-writing">
        <button type="button" class="post-button2">Booming</button>
    `
} else{
    account.innerHTML +=`
        <img src="${profile}" alt="">
        <span class="account_name">${username}</span>
    `
    writePost.innerHTML += `
        <img src="${profile}" alt="">
        <input type="text" placeholder="What happened?" id="post-writing">
        <button type="button" class="post-button2">Booming</button>
    `
}


// log out button
function logOut(){
    localStorage.removeItem("userName")
    window.location.replace("../index.html")
}