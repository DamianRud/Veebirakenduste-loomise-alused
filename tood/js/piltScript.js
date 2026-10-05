//juhuslit pilt - mida võetakse massiivist

function juhuslikpilt() {
    //massiiv pildifailidest
    pildid=[
        '../pildid/smail.png',
        '../pildid/kurb.png',
        '../pildid/neutral.png',
        '../pildid/lill.png'
    ];
    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    let randomPilt=document.getElementById('randomPilt');
    //Math.floor-ümardab täisarvunusi
    //Math.random-juhuslik arv

    randomPilt.src=pilt;
}

function selectValik() {
    let vastus = document.getElementById('vastus');
    let valik = document.getElementById('valik');
    let randomPilt = document.getElementById('randomPilt');
    let valitudPilt = document.getElementById('valitudPilt');


    if (valik.value === "vali...") {
        valitudPilt.style.display = "none";
        vastus.innerHTML = "Siia tuleb vastus";
        vastus.style.color = "black";
        return;
    }

    // показываем выбранную картинку справа от круга
    valitudPilt.src = valik.value;
    valitudPilt.style.display = "block";

    if (randomPilt.getAttribute('src') == valik.value) {
        vastus.innerHTML = "õige!";
        vastus.style.color = "green";
    } else {
        vastus.innerHTML = "Vale!";
        vastus.style.color = "red";
    }
}


function radioValik() {
    let piltValik = document.getElementsByName("piltValik");
    let valitudPilt = document.getElementById("valitudPilt");

    for (let i = 0; i < piltValik.length; i++) {
        if (piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
            valitudPilt.style.display = "block";
        }
    }
}