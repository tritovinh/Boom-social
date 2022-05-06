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

// get local storage
let username = localStorage.getItem("userName")
let accountName = localStorage.getItem("accountName")
let profile = localStorage.getItem("profilePic")
let backgroundPicture = localStorage.getItem("backgroundPic")
// take the elemennt in html
let account = document.getElementById("account")
let writePost = document.getElementById("write-post")

let backgroundPic = document.getElementById("background-pic")
let profilePic = document.getElementById("profile-pic")

let userName = document.getElementById("realname")
let account_name = document.getElementById("accountName")
let name = document.getElementById("name")
if ( username == null){
    account.innerHTML +=`
        <i class="fas fa-solid fa-universal-access"></i>
        <a href="../login/login.html" id="accountName">Login</a>
    `
    name.innerHTML += `
        <p id="realName">Your name</p>
        <p id="accountName">Your account name</p>
    `
    backgroundPic.innerHTML += `
        <img src="https://www.kaindl.com/fileadmin/_processed_/d/8/csm_2162_PE_Dekorbild_0ec3e17e00.jpg" alt="">
    `
    profilePic.innerHTML += `
        <img src="https://www.chamber-music.org/sites/all/themes/custom/cma/images/profile-photo-empty.png" alt="">
    `
} else{
    account.innerHTML +=`
        <img src="${profile}" alt="">
        <span class="account_name">${username}</span>
    `
    name.innerHTML += `
        <p id="realName">${username}</p>
        <p id="accountName">${accountName}</p>
    `
    backgroundPic.innerHTML += `
        <img src="${backgroundPicture}" alt="">
    `
    profilePic.innerHTML += `
        <img src="${profile}" alt="">
    `
}


// log out button
function logOut(){
    localStorage.removeItem("userName")
    window.location.replace("../index.html")
}