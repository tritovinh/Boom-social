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
    var element = document.getElementById("like");
    element.classList.toggle("liked");
}

// commment
var coll = document.getElementsByClassName("comment");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// dark mode
let currentTheme = localStorage.getItem(theme)

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
        Comment: [
            {
                name: "Tom",
                profilepic: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
                content: "I so sorry",
            },
            {
                name: "Jerry",
                profilepic: "https://pbs.twimg.com/media/EtvfOFTWYAc3j1q.jpg",
                content: "Oh no",
            }
        ]
    },
];

let postContent = document.getElementById("read-post-container");
function renderPost(){
    for (let post of mainPost) {
      console.log(post);
        for(let comment of post.Comment){
          console.log(comment)
          postContent.innerHTML +=`
          <div class="read-post">
                <div class="profile-post">
                    <img src="https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg" alt="">
                    <div class="name">
                        <span>Buff Garfield</span>
                        <span class="user-name">@Buff1999</span>
                    </div>
                </div>
                <div class="post-content">
                    <p>I go to the hospital today. Luckily, I still alive</p>
                </div>
                <div class="slideshow-container">
                    <div class="mySlides fade">
                        <div class="numbertext">1 / 3</div>
                        <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style="width:100%">
                    </div>
                    <div class="mySlides fade">
                        <div class="numbertext">2 / 3</div>
                        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%">
                    </div>
                    <div class="mySlides fade">
                        <div class="numbertext">3 / 3</div>
                        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%">
                    </div>
                </div>
                <div class="reaction-info">
                    <div class="like">
                        <span id="likes"></span>
                        <button id="like" onclick="liked()">
                            <i class="fa-solid fa-heart"></i>
                            <span>Likes</span>
                        </button>
                    </div>
                    <div>
                        <span id="comments"></span>
                        <button id="comment" class="comment">
                            <i class="fa-solid fa-message"></i>
                            <span>Comment</span>
                        </button>
                    </div>
                </div>
                <div class="comment-container">
                    <div class="comment">
                        <img src=""
                            alt="">
                        <div class="comment-content">
                            <p class="comment-name">Tom</p>
                            <p>Nice job</p>
                        </div>
                    </div>
                </div>
            </div>
          `
        }
    }
}
renderPost();