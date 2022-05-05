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

// switch tab
function openVoiceTab(evt, type) {
    let i, voice, voiceType;
    voice = document.getElementsByClassName("voice");
    for (i = 0; i < voice.length; i++) {
      voice[i].style.display = "none";
    }
    voiceType = document.getElementsByClassName("voiceType");
    for (i = 0; i < voiceType.length; i++) {
      voiceType[i].className = voiceType[i].className.replace(" active", "");
    }
    document.getElementById(type).style.display = "";
    evt.currentTarget.className += " active";
}

let followarr = [
    {
        title: "Saturday night",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://data.whicdn.com/images/344524632/original.jpg",
        hostName: "John Smith",
        status: "Live",
    },
    {
        title: "Facebook change to Metaverse",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://i.etsystatic.com/15418561/c/2250/1788/0/230/il/f06c80/3233862560/il_340x270.3233862560_jwqd.jpg",
        hostName: "Daniel Howard",
        status: "Live",
    },
    {
        title: "Mars is the next",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://cutewallpaper.org/25/animated-wallpaper-for-profile-pics/3955398.jpg",
        hostName: "Joey Towen",
        status: "Live",
    },
];

let followVoice = document.getElementById("Follow")
function renderFollow(){
    for(let i of followarr){
        followVoice.innerHTML +=`
        <div class="voice-box">
                <div class="title">
                    <p class="main-title">${i.title}</p>
                    <p class="description">${i.description}</p>
                </div>
                <div class="host">
                    <img src="${i.hostPic}" alt="">
                    <p>${i.hostName}</p>
                </div>
                <span class="status">${i.status}</span>
            </div>
        `
    }
}
renderFollow();

let populararr = [
    {
        title: "Saturday night",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://data.whicdn.com/images/344524632/original.jpg",
        hostName: "John Smith",
        status: "Live",
    },
    {
        title: "Javascript is too complicated",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://cutewallpaper.org/25/animated-wallpaper-for-profile-pics/3955398.jpg",
        hostName: "Diana Howard",
        status: "Live",
    },
    {
        title: "Bitcoin gonna died",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://i.etsystatic.com/15418561/c/2250/1788/0/230/il/f06c80/3233862560/il_340x270.3233862560_jwqd.jpg",
        hostName: "Tom Towen",
        status: "4 days ago",
    },
];

let popularVoice = document.getElementById("Popular")
function renderPopular(){
    for(let i of populararr){
        popularVoice.innerHTML +=`
        <div class="voice-box">
                <div class="title">
                    <p class="main-title">${i.title}</p>
                    <p class="description">${i.description}</p>
                </div>
                <div class="host">
                    <img src="${i.hostPic}" alt="">
                    <p>${i.hostName}</p>
                </div>
                <span class="status">${i.status}</span>
            </div>
        `
    }
}
renderPopular();

let Topicarr = [
    {
        title: "Saturday night",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://data.whicdn.com/images/344524632/original.jpg",
        hostName: "John Smith",
        status: "Live",
    },
    {
        title: "Facebook change to Metaverse",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://i.etsystatic.com/15418561/c/2250/1788/0/230/il/f06c80/3233862560/il_340x270.3233862560_jwqd.jpg",
        hostName: "Daniel Howard",
        status: "Live",
    },
    {
        title: "Mars is the next",
        description: "lorem ipsum dolor sit amet, consectetur. lorem ipsum dolor",
        hostPic: "https://cutewallpaper.org/25/animated-wallpaper-for-profile-pics/3955398.jpg",
        hostName: "Joey Towen",
        status: "Live",
    },
];

let topicVoice = document.getElementById("Topic")
function renderTopic(){
    for(let i of Topicarr){
        topicVoice.innerHTML +=`
        <div class="voice-box">
                <div class="title">
                    <p class="main-title">${i.title}</p>
                    <p class="description">${i.description}</p>
                </div>
                <div class="host">
                    <img src="${i.hostPic}" alt="">
                    <p>${i.hostName}</p>
                </div>
                <span class="status">${i.status}</span>
            </div>
        `
    }
}
renderTopic();