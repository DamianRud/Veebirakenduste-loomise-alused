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

    if (randomPilt.getAttribute('src') == valik.value) {
        vastus.innerHTML = "õige!";
        vastus.style.color="green";

    } else {
        vastus.style.color="red";
        vastus.innerHTML = "Vale!";
    }


}


function radioValik() {
    let piltValik = document.getElementsByName("piltValik");//mitu elemendi ühe nimega
    let valitudPilt = document.getElementById("valitudPilt");


    for (let i = 0; i < piltValik.length; i++) {
        if(piltValik[i].checked){
            valitudPilt.src = piltValik[i].value;
        } else{
            // alert('tee oma valiku');
        }
    }

}