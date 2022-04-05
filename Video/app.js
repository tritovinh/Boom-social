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
        tittle:"I can't believe Jaden is 21?!?!"
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

let musicarr = [
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/WFsAon_TWPQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Charlie Puth - Light Switch [Official Music Video]"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/D9G1VOjN_84\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/TP1xs1hF2ZE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Anne-Marie - 2002 (Live At Brighton Music Hall 2018)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/TUVcZfQe-Kw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Dua Lipa - Levitating Featuring DaBaby (Official Music Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/2fDzCWNS3ig\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"The Weeknd - Out of Time (Official Video)"
    },
];
let musicVideo = document.getElementById("Music")
function renderMusic(){
    for(let i of musicarr){
        musicVideo.innerHTML +=`
        <div class="video-item">
            ${i.video}
            <p>${i.tittle}</p>
        </div>
        `
    }
}
renderMusic();

let newsarr = [
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/82_9QVaa6R4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Growing atrocities from war in Ukraine spark outrage l WNT"
    },
    {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/oyNCOgNxAtM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Russia is focusing on Eastern Ukraine. Retired general explains how to stop them"
    },
       {
        video: "<iframe width=\"1691\" height=\"766\" src=\"https://www.youtube.com/embed/lRkLhhSz3cU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        tittle:"Support Growing Within EU For Russian Oil Embargo"
    },
];
let newsVideo = document.getElementById("News")
function renderNews(){
    for(let i of newsarr){
        newsVideo.innerHTML +=`
        <div class="video-item">
            ${i.video}
            <p>${i.tittle}</p>
        </div>
        `
    }
}
renderNews();