console.log('This is my music page');
let index = 0;
let audioElement = new Audio('./music/Kick Back.mp3');
let masterPlay = document.getElementById('masterPlay');
let song_progress = document.getElementById('song_progress');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "Akuma no ko", filePath: "./music/Akuma_no_ko.mp3", coverPath: "./img/Akuma_no_Ko_cover.jpg.webp" },
    { songName: "Kick Back", filePath: "./music/Kick Back.mp3", coverPath: "./img/cover_Kick_Back.jpeg" },
    { songName: "Shinunoga E-Wa", filePath: "./music/Shinunoga E-Wa.mp3", coverPath: "./img/cover_Shinunoga_E-wa.jpeg" },
    { songName: "Before lights out", filePath: "./music/Before lights out.mp3", coverPath: "./img/cover_Before_lights_out.jpeg" },
    { songName: "0sk", filePath: "./music/0sk.mp3", coverPath: "./img/cover_0sk.jpeg" },
    { songName: "The Rumbling", filePath: "./music/The Rumbling.mp3", coverPath: "./img/cover_The_rumbling.jpeg" },
    { songName: "Sweater Weather", filePath: "./music/Sweater Weather.mp3", coverPath: "./img/cover_Sweater_whether.jpeg" },
    { songName: "Michishirube", filePath: "./music/Michishirube.mp3", coverPath: "./img/cover_Michishirube.jpeg" },
    { songName: "No Surprises", filePath: "./music/No Surpriese.mp3", coverPath: "./img/cover_Radiohead.jpeg" },
    { songName: "Mother Mother - Verbatim", filePath: "./music/Mother Mother - Verbatim.mp3", coverPath: "./img/cover_Verbatim.jpeg" },
];

    let i=0;
    songs.forEach(async (element,i)=>
    {
        
        let audioElem=new Audio(element.filePath);
        audioElem.onloadedmetadata = function() {
        let totalmin = parseInt(audioElem.duration / 60) < 10 ? `0${parseInt(audioElem.duration / 60)}` : `${parseInt(audioElem.duration / 60)}`;
        let totalsec = parseInt(audioElem.duration % 60) < 10 ? `0${parseInt(audioElem.duration % 60)}` : `${parseInt(audioElem.duration % 60)}`;
        console.log(totalmin, totalsec);
        // document.getElementsByClassName("tottimeinhead")[i].innerHTML=
        document.getElementsByClassName("tottimeinhead")[i].innerHTML = `${totalmin}:${totalsec}`;
        i++;
        };
        
        // let myPromise=new Promise(function(resolve,reject)
        // {
        //     let value=new Audio(element.filePath);
        //     resolve(value);
        // });
        // var audioElem;
        // myPromise.then(function(value)
        // {
        //     audioElem=value;
        //     
        // }
        // );
        // let audioElem=new Audio(element.filePath);
    
        
    })



let ind2=0;
 i=0;

// let i = 0;
i=0;
songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('text')[0].innerHTML = songs[i].songName;
    // let audiofun = async function(){return((new Audio(songs[i].filePath)))};
    // let audioElement=await(audiofun());
    // let audioElement=new Audio(songs[i].filePath);
    // console.log(audioElemet.duration);
    // audioElement.play();
    // setTimeout(()=>
    // {
   
    // console.log(audioElement.duration);
    // }, 500);
    // element.getElementsByClassName('songlistplay')[0].getElementsByTagName('span')[0].getElementsByTagName('div')[0].innerHTML = "hello";

    i++;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle')
        // gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    console.log('Time update');
    progree = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    song_progress.value = progree;
    let currmin = parseInt(audioElement.currentTime / 60) < 10 ? `0${parseInt(audioElement.currentTime / 60)}` : `${parseInt(audioElement.currentTime / 60)}`;
    let currsec = parseInt(audioElement.currentTime % 60) < 10 ? `0${parseInt(audioElement.currentTime % 60)}` : `${parseInt(audioElement.currentTime % 60)}`;
    let totalmin = parseInt(audioElement.duration / 60) < 10 ? `0${parseInt(audioElement.duration / 60)}` : `${parseInt(audioElement.duration / 60)}`;
    let totalsec = parseInt(audioElement.duration % 60) < 10 ? `0${parseInt(audioElement.duration % 60)}` : `${parseInt(audioElement.duration % 60)}`;
    document.getElementsByClassName("currtime")[0].innerHTML = `${currmin}:${currsec}`;
    document.getElementsByClassName("totaltime")[0].innerHTML = `${totalmin}:${totalsec}`;
})
song_progress.addEventListener('change', () => {
    audioElement.currentTime = song_progress.value * audioElement.duration / 100;

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.currentTime = 0;
        audioElement.src = songs[index].filePath;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.play();
        document.getElementsByClassName("currsong")[0].innerHTML = songs[index].songName;
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (index >= 9) {
        index = 0;
    }
    else {
        index += 1;
    }
    makeAllPlays();
    audioElement.src = songs[index].filePath;
    document.getElementById(String(index)).classList.remove('fa-play-circle');
    document.getElementById(String(index)).classList.add('fa-pause-circle');
    audioElement.currentTime = 0;
    audioElement.play();
    // document.getElementsByClassName('currsong')[0].innerHTML=songs[index].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementsByClassName("currsong")[0].innerHTML = songs[index].songName;
})
document.getElementById('previous').addEventListener('click', () => {
    if (index == 0) {
        index = 9;
    }
    else {
        index -= 1;
    }
    makeAllPlays();
    document.getElementById(String(index)).classList.remove('fa-play-circle');
    document.getElementById(String(index)).classList.add('fa-pause-circle');
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    // document.getElementsByClassName('currsong')[0].innerHTML=songs[index].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audioElement.play()
    document.getElementsByClassName("currsong")[0].innerHTML = songs[index].songName;
})
