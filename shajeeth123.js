let number = document.querySelectorAll(".drum ").length;
for (let i = 0; i < number; i++) {
    document.querySelectorAll(".drum ")[i].addEventListener("click", function () {
        var buttionInnerHTML = this.innerHTML
        playsound(buttionInnerHTML);
    })

}
document.addEventListener("keydown", function (event) {
    console.log(event.key);
    playsound(event.key);
})
        


function playsound(key) {
    switch (key) {
        case "A❤️": const song1 = new Audio('song/Ek Ka Nam Sinu Ringtone Download - MobCup.Com.Co.mp3');
            song1.play();
            break;

        case "B❤️": const song2 = new Audio('song/minnal-wala-song-ringtone-download-mobcup-com-co-67236 (1).mp3');
            song2.play();
            break;

        case "C❤️": const song3 = new Audio('song/nadukaatildhanimaiyuvan-12652.mp3');
            song3.play();
            break;


        default:
            console.log("press the correct key");
    }

}




