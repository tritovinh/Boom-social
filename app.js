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

// post array
let mainPost = [
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        pic2: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        pic3: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "I so sorry",
        
    },
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        pic2: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        pic3: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "I so sorry",
        
    },
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        pic2: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        pic3: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "I so sorry",
        
    },
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        pic2: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        pic3: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "I so sorry",
        
    },
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        pic2: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        pic3: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "I so sorry",
        
    },
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        pic2: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        pic3: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "I so sorry",
        
    },
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        pic2: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        pic3: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "I so sorry",
        
    },
];

let postContent = document.getElementById("read-post-container");
function renderPost(){
    for (let post of mainPost) {
          postContent.innerHTML +=`
          <div class="read-post">
                <div class="profile-post">
                    <img src="${post.profilePic}" alt="">
                    <div class="name">
                        <span>${post.name}</span>
                        <span class="user-name">@Buff1999</span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                </div>
                <div class="slideshow-container">
                    <div class="mySlides fade">
                        <div class="numbertext">1 / 3</div>
                        <img src="${post.pic1}" style="width:100%">
                    </div>
                    <div class="mySlides fade">
                        <div class="numbertext">2 / 3</div>
                        <img src="${post.pic2}" style="width:100%">
                    </div>
                    <div class="mySlides fade">
                        <div class="numbertext">3 / 3</div>
                        <img src="${post.pic3}" style="width:100%">
                    </div>
                </div>
                <div class="reaction-info">
                    <div id="like">
                        <span id="likes"></span>
                        <button id="like" onclick="liked()">
                            <i class="fa-solid fa-heart"></i>
                            <span>Likes</span>
                        </button>
                    </div>
                    <div>
                        <span id="comments"></span>
                        <button class="comment" class="comment">
                            <i class="fa-solid fa-message"></i>
                            <span>Comment</span>
                        </button>
                    </div>
                </div>
                <div class="comment-container">
                    <div class="comment">
                        <img src="${post.commentProfilePic1}"
                            alt="">
                        <div class="comment-content">
                            <p class="comment-name">${post.commentName1}</p>
                            <p>${post.commentContent1}</p</>>
                        </div>
                    </div>
                </div>
            </div>
          `
    }
}
renderPost();

// img sildeshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// like button
function liked(){
    let element = document.getElementsById("like");
    element.classList.toggle("liked");
}

// commment
let coll = document.getElementById("comment");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
