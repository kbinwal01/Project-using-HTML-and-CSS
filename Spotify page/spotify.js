console.log("welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById(' myProgressBar')
let songs=[
     {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},

]

masterPlay.addEventListener('click',()=>{
    if(audioElement.pause|| audioElement<=0){
        audioElement.play();
        
    }
}
)