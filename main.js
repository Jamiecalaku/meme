let form = document.getElementById("main-form");
let input = document.getElementById("Zahl");
form.addEventListener("submit", function(event){
    console.log("clicked");
    event.preventDefault()
    let inputValue = input.value;
    localStorage.setItem("zahl", inputValue);
    input.value = "";
})

let loadButton = document.getElementById("load-button");
loadButton.addEventListener("click", function(event){
    let zahl = localStorage.getItem("zahl");
    input.value = zahl;


    
    image.innerHTML = `<img src="meme.jpg" id="img" alt="meme">`;

    const music = new Audio('sound.mp3');
    music.play();
    event.preventDefault();

    setTimeout(imglöschen, 5000);
})

function imglöschen(){
    let imgdelete = document.getElementById("img");
    img.parentNode.removeChild(imgdelete);
    console.log("Image erfolgreich gelöscht (nach 5 sekunden)")
    const music = new Audio('nice.mp3');
    music.play();

    
}