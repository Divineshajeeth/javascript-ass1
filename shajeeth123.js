let number = document.querySelectorAll(".drum ").length;
for (let i = 0; i < number; i++) {
    document.querySelectorAll(".drum ")[i].addEventListener("click", function () {
        var buttionInnerHTML = this.innerHTML
        playsound(buttionInnerHTML);
    })

}
  var song = null

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    playsound(event.key);
})



function playsound(key) {
    if (song){
        song.pause()
        song.currentTime = 0
    }
    switch (key) {
        case "A❤️": song = new Audio('song/Ek Ka Nam Sinu Ringtone Download - MobCup.Com.Co.mp3');
            song.play();
            break;

        case "B❤️": song = new Audio('song/minnal-wala-song-ringtone-download-mobcup-com-co-67236 (1).mp3');
            song.play();
            break;

        case "C❤️":  song = new Audio('song/nadukaatildhanimaiyuvan-12652.mp3');
            song.play();
            break;


        default:
            console.log("press the correct key");
    }

}




