const rex = document.getElementById("rex");
const cactus = document.getElementById("cactus");

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