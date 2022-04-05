function openVideoTab(evt, type) {
    let i, video, videoType;
    video = document.getElementsByClassName("video");
    for (i = 0; i < video.length; i++) {
      video[i].style.display = "none";
    }
    videoType = document.getElementsByClassName("videoType");
    for (i = 0; i < videoType.length; i++) {
      videoType[i].className = videoType[i].className.replace(" active", "");
    }
    document.getElementById(type).style.display = "";
    evt.currentTarget.className += " active";
}

let followarr = [
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/z_czmz_bJqk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"How Ludwig Became The Biggest Twitch Streamer…Then Left For Youtube"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/D7OHb9hnNnE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"5 Cleaning Kitchen Gadgets Tested By Design Expert | Well Equipped | Epicurious"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2MzyUws1Ois\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"I can’t believe Jaden is 21?!?!"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/jX8hxcCSjog\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Inside Wiz Khalifa's $4.6M L.A. Mansion & Recording Studio | Open Door | Architectural Digest"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/hgx2jZvbLKA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"I Built Logan Paul A Car!"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/e-jhaZJNucA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"WORLD'S FIRST Sub-4 Minute Mile in Nike ZoomX Vaporfly Next%"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/JLC_T1jQ5Lk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"How This Woman Mastered Jump Rope | WIRED"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/-Z0C2-eZqcc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Joshua Weissman Breaks Down His Favorite Snacks | Snacked"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/1BWUF1fxEw0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Meme Monday 18: Trở lại của trở lại ?"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/s1_5s7WlC8E\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"If Nursing Was Like Programming"
    },
];

let followVideo = document.getElementById("Follow")
function renderFollow(){
    for(let i of followarr){
        followVideo.innerHTML +=`
        <div class="video-item">
            ${i.video}
            <p>${i.tittle}</p>
        </div>
        `
    }
}
renderFollow();

let newsarr = [
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/z_czmz_bJqk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"How Ludwig Became The Biggest Twitch Streamer…Then Left For Youtube"
    }
];

let musicarr = [
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/z_czmz_bJqk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"How Ludwig Became The Biggest Twitch Streamer…Then Left For Youtube"
    }
];