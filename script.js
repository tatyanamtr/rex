const rex = document.getElementById("rex");
const cactus = document.getElementById("cactus");

let score = 0;
document.getElementById("score").innerHTML = "score: " + score;

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (rex.classList != 'jump') {
        rex.classList.add("jump");
    }
    setTimeout( function() {
        rex.classList.remove("jump");
    }, 500)
        
}



function addScore() {
    score+=1;
    document.getElementById("score").innerHTML = "score: " + score;
}

let isScore = setInterval (function() {
    let rexTop = parseInt(window.getComputedStyle(rex).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && rexTop < 140) {
        addScore();
    }
}, 200)

let isAlive = setInterval ( function() {
    let rexTop = parseInt(window.getComputedStyle(rex).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && rexTop >= 140) {
        score = 0;
        document.getElementById("score").innerHTML = "score: " + score;
        alert("GAME OVER");
    }
}, 10)