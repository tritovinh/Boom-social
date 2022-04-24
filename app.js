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

const changeTheme = document.getElementById("change-theme");
changeTheme.onclick = function myDarkTheme(){
    let currentTheme = html.getAttribute("data-theme");
    console.log("hello world!")
    if(currentTheme === "dark"){
        setAttribute(data-theme, "light");
    }
    else{
        setAttribute(data-theme, "dark")
    }
}

// post array
let mainPost = [
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "I have arivved to Paris",
        pic1: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        pic2: "",
        pic3: "",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "Nice pictures",
        
    },
    {
        profilePic: "data:image/png;base64,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",
        name: "PPanther",
        profileName: "@PP223",
        content: "I go to the hospital today. Luckily, I still alive",
        pic1: "https://media1.giphy.com/media/QY7Ng6qZuQ4V2/giphy_s.gif",
        pic2: "",
        pic3: "",
        commentName1: "Tony Kimerby",
        commentProfilePic1: "https://i.pinimg.com/474x/98/20/02/9820024b036a21a18d4aa6dda2abc189--we-bare-bears-cartoon.jpg",
        commentContent1: "I so sorry",
        
    },
    {
        profilePic: "data:image/png;base64,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",
        name: "Perry Garfield",
        profileName: "@Perry2001",
        content: "Russia warns West of \"unpredictable consequences\" and new strikes hit the outskirts of the Ukrainian capital, Kyiv",
        pic1: "",
        pic2: "",
        pic3: "",
        commentName1: "",
        commentProfilePic1: "",
        commentContent1: "",
        
    },
    {
        profilePic: "https://pbs.twimg.com/media/Dyg-OCfW0AA9dKp.jpg",
        name: "Buff Garfield",
        profileName: "@Buff1999",
        content: "Beautiful pic to show you guys",
        pic1: "https://mosaically.com/~/t/m/2021/1/22/e70eb0d7-057b-40f0-94fc-4131faaf4452/19/s.jpg",
        pic2: "",
        pic3: "",
        commentName1: "Tom",
        commentProfilePic1: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
        commentContent1: "Nice pic",
        
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
                        
                        <img src="${post.pic1}" style="width:100%">
                    </div>
                    <div class="mySlides fade">
                    <!--
                        <img src="${post.pic2}" style="width:100%">
                    </div>

                    <div class="mySlides fade">
                        
                        <img src="${post.pic3}" style="width:100%">
                    </div>
                    -->
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
                        <button class="comments">
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
                            <p>${post.commentContent1}</p</>
                        </div>
                    </div>
                </div>
            </div>
          `
    }
}
renderPost();

// img sildeshow
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
  
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
  
//   slides[slideIndex-1].style.display = "block";  

//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// like button
function liked(){
    var element = document.getElementById("like");
    element.classList.toggle("liked");
}

// commment
// let coll = document.getElementById("comment");
// let i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
