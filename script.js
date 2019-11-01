window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = ["rgb(145, 27, 27)", "rgb(184, 106, 42)", "rgb(183, 185, 51)", "rgb(182, 247, 6)", "rgb(43, 185, 55)", "rgb(48, 189, 165)", 
        "rgb(44, 103, 180)", "rgb(182, 48, 194)", "rgb(65, 45, 55)", "rgb(108, 190, 159)"];


    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            creatBubbles(index);

        }); 
    });
    const creatBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s";

    };

});

