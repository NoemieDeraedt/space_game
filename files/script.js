auraBasSize = -10;
auraHautSize = 140;
GrossePlaneteSize = 70;
PetitePlanete1Size = 110;
PetitePlanete2Size = 200;
PetitePlanete3Size = 0;
PetitePlanete4Size = 400;

Asteroide1Pos = 200;
Asteroide2Pos = 150;
Asteroide3Pos = 200;
Asteroide4Pos = 250;
Asteroide5Pos = 300;
Asteroide6Pos = 300;
Asteroide7Pos = 350;
Asteroide8Pos = 400;
Asteroide9Pos = 450;
Asteroide10Pos = 450;
Asteroide11Pos = 500;
Asteroide12Pos = 550;
Asteroide13Pos = 550;
Asteroide14Pos = 600;
Asteroide15Pos = 650;
Asteroide16Pos = 1100;
Asteroide17Pos = 1100;
Asteroide18Pos = 1100;
Asteroide19Pos = 1100;

shipPosition = 30;
changeInterval = null;

crop = 17;

function start() {
    normalShip();
    setInterval(moveAura, 5);
    setInterval(move, 0.1);

    setInterval(function() {
        crop -= 0.012;
        console.log(crop);
        document.getElementById("barre").style.clipPath = "inset(0 " + crop + "vh)";
    }, 60);

    window.addEventListener('keydown', moveShip, false);
    setTimeout(function() {
        alert("Bravo ! Vous avez gagné !");
        window.location = "menu.html";
    }, 60000);
}

function move() {
    moveAsteroids();
    movePlanets();
}

function moveAura() {
    auraBasSize -= 0.004;
    auraHautSize -= 0.004;
    document.getElementById("AuraBas").style.marginLeft = auraBasSize + "vh";
    document.getElementById("AuraHaut").style.marginLeft = auraHautSize + "vh";
}

function movePlanets() {
    GrossePlaneteSize -= 0.001;
    PetitePlanete1Size -= 0.01;
    PetitePlanete2Size -= 0.025;
    PetitePlanete3Size -= 0.01;
    PetitePlanete4Size -= 0.03;

    document.getElementById("GrossePlanete").style.marginLeft = GrossePlaneteSize + "vh";
    document.getElementById("PetitePlanete1").style.marginLeft = PetitePlanete1Size + "vh";
    document.getElementById("PetitePlanete2").style.marginLeft = PetitePlanete2Size + "vh";
    document.getElementById("PetitePlanete3").style.marginLeft = PetitePlanete3Size + "vh";
    document.getElementById("PetitePlanete4").style.marginLeft = PetitePlanete4Size + "vh";
}

function moveAsteroids() {
    Asteroide1Pos -= 0.15;
    Asteroide2Pos -= 0.1;
    Asteroide3Pos -= 0.05;
    Asteroide4Pos -= 0.03;
    Asteroide5Pos -= 0.15;
    Asteroide6Pos -= 0.1;
    Asteroide7Pos -= 0.07;
    Asteroide8Pos -= 0.1;
    Asteroide9Pos -= 0.05;
    Asteroide10Pos -= 0.05;
    Asteroide11Pos -= 0.1;
    Asteroide12Pos -= 0.15;
    Asteroide13Pos -= 0.05;
    Asteroide14Pos -= 0.08;
    Asteroide15Pos -= 0.1;
    Asteroide16Pos -= 0.15;
    Asteroide17Pos -= 0.2;
    Asteroide18Pos -= 0.1;
    Asteroide19Pos -= 0.15;

    document.getElementById("Asteroide1").style.marginLeft = Asteroide1Pos + "vh";
    document.getElementById("Asteroide2").style.marginLeft = Asteroide2Pos + "vh";
    document.getElementById("Asteroide3").style.marginLeft = Asteroide3Pos + "vh";
    document.getElementById("Asteroide4").style.marginLeft = Asteroide4Pos + "vh";
    document.getElementById("Asteroide5").style.marginLeft = Asteroide5Pos + "vh";
    document.getElementById("Asteroide6").style.marginLeft = Asteroide6Pos + "vh";
    document.getElementById("Asteroide7").style.marginLeft = Asteroide7Pos + "vh";
    document.getElementById("Asteroide8").style.marginLeft = Asteroide8Pos + "vh";
    document.getElementById("Asteroide9").style.marginLeft = Asteroide9Pos + "vh";
    document.getElementById("Asteroide10").style.marginLeft = Asteroide10Pos + "vh";
    document.getElementById("Asteroide11").style.marginLeft = Asteroide11Pos + "vh";
    document.getElementById("Asteroide12").style.marginLeft = Asteroide12Pos + "vh";
    document.getElementById("Asteroide13").style.marginLeft = Asteroide13Pos + "vh";
    document.getElementById("Asteroide14").style.marginLeft = Asteroide14Pos + "vh";
    document.getElementById("Asteroide15").style.marginLeft = Asteroide15Pos + "vh";
    document.getElementById("Asteroide16").style.marginLeft = Asteroide16Pos + "vh";
    document.getElementById("Asteroide17").style.marginLeft = Asteroide17Pos + "vh";
    document.getElementById("Asteroide18").style.marginLeft = Asteroide18Pos + "vh";
    document.getElementById("Asteroide19").style.marginLeft = Asteroide19Pos + "vh";
    check_collision();
}

function check_collision() {
    var asteroids = [document.getElementById("Asteroide1"),
                    document.getElementById("Asteroide2"),
                    document.getElementById("Asteroide3"),
                    document.getElementById("Asteroide4"),
                    document.getElementById("Asteroide5"),
                    document.getElementById("Asteroide6"),
                    document.getElementById("Asteroide7"),
                    document.getElementById("Asteroide8"),
                    document.getElementById("Asteroide9"),
                    document.getElementById("Asteroide10"),
                    document.getElementById("Asteroide11"),
                    document.getElementById("Asteroide12"),
                    document.getElementById("Asteroide13"),
                    document.getElementById("Asteroide14"),
                    document.getElementById("Asteroide15"),
                    document.getElementById("Asteroide16"),
                    document.getElementById("Asteroide17"),
                ];
    var b = document.getElementById("Vaisseau");

    asteroids.forEach(function(item) {
        if (b.getBoundingClientRect().x + b.getBoundingClientRect().width > item.getBoundingClientRect().x
            && b.getBoundingClientRect().y <= item.getBoundingClientRect().y
            && b.getBoundingClientRect().y + b.getBoundingClientRect().height - 55 >= item.getBoundingClientRect().y
            && b.getBoundingClientRect().x <= item.getBoundingClientRect().x) {
                alert("Vous avez percuté un débris ! Réessayez !");
                window.location = "menu.html";
            }
    });
}

function moveShip() {
    let key = event.which || event.keyCode;
    const ship = document.getElementById("Vaisseau");

    if ((key === 38 || key === 90) && shipPosition >= 0) {
        shipPosition -= 2;
        ship.setAttribute("src", "../Assets/3-1.png");
        ship.style.marginTop = shipPosition + "vh";
        clearInterval(changeInterval);
        changeInterval = setInterval(changeShip, 150);
        window.addEventListener('keyup', normalShip, false);
    } else if ((key === 40 || key === 83) && shipPosition <= 65) {
        shipPosition += 2;
        ship.setAttribute("src", "../Assets/2-1.png");
        ship.style.marginTop = shipPosition + "vh";
        clearInterval(changeInterval);
        changeInterval = setInterval(changeShip, 150);
        window.addEventListener('keyup', normalShip, false);
    }
}

function changeShip() {
    vaisseau = document.getElementById("Vaisseau");

    if (vaisseau.getAttribute("src") === "../Assets/1-1.png") {
        vaisseau.setAttribute("src", "../Assets/1-2.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/1-2.png") {
        vaisseau.setAttribute("src", "../Assets/1-3.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/1-3.png") {
        vaisseau.setAttribute("src", "../Assets/1-4.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/1-4.png") {
        vaisseau.setAttribute("src", "../Assets/1-1.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/2-1.png") {
        vaisseau.setAttribute("src", "../Assets/2-2.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/2-2.png") {
        vaisseau.setAttribute("src", "../Assets/2-3.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/2-3.png") {
        vaisseau.setAttribute("src", "../Assets/2-4.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/2-4.png") {
        vaisseau.setAttribute("src", "../Assets/2-1.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/3-1.png") {
        vaisseau.setAttribute("src", "../Assets/3-2.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/3-2.png") {
        vaisseau.setAttribute("src", "../Assets/3-3.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/3-3.png") {
        vaisseau.setAttribute("src", "../Assets/3-4.png");
    } else if (vaisseau.getAttribute("src") === "../Assets/3-4.png") {
        vaisseau.setAttribute("src", "../Assets/3-1.png");
    }
}

function normalShip() {
    document.getElementById("Vaisseau").setAttribute("src", "../Assets/1-1.png");
    clearInterval(changeInterval);
    changeInterval = setInterval(changeShip, 150);
}

window.addEventListener("load", start);
