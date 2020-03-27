
function start() {
    alert("Bienvenue !\nPour jouer, utilisez les flèches directionelles haut et bas afin d'éviter les astéroïdes.\nBonne chance !\nPS: Si la vidéo ne se lance pas, lisez le README.txt fourni");
    document.getElementById("video1").play();
    setTimeout(function() {
        document.getElementById("video1").setAttribute("src", null);
        document.getElementById("video2").play();
        setTimeout(function() {
            document.getElementById("video2").setAttribute("src", null);
        }, 2000);
    }, 5000);
    setTimeout(function() {
        window.location = "files/menu.html";
    }, 7000);
}

window.addEventListener("load", start);
