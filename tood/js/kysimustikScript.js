function  nimilugeminekastist(){
    let vastus1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");


    vastus1.innerHTML="Sisestatud nimi on:"+nimi.value;
    vastus1.style.backgroundColor="lightgreen";

    return nimi.value;
}

//radio valikud
function radioValik() {
    let vastus2 = document.getElementById("vastus2");
    let spotify = document.getElementById("spotify");
    let raadio = document.getElementById("raadio");
    let vinyl = document.getElementById("vinyl");

    let valik="";

    if(spotify.checked){
        valik=spotify.value;
    } else if(raadio.checked){
        valik=raadio.value;
    } else if(vinyl.checked){
        valik=vinyl.value;
    } else {
        valik="palun tee oma valik";
    }


    //vastus
    vastus2.innerHTML="valik:"+valik;

    return valik;


}



//checkbox
function checkboxValik() {
    let vastus3 = document.getElementById("vastus3");
    let system = document.getElementById("systemofdown");
    let metall = document.getElementById("metallica");
    let rolling = document.getElementById("rollingstones");

    let valik2 = "";


    if (system.checked) {
        valik2 += system.value + " ";
    }
    if (metall.checked) {
        valik2 += metall.value + " ";
    }
    if (rolling.checked) {
        valik2 += rolling.value + " ";
    }

    if (valik2 === "") {
        valik2 = "Tee oma valik";
    }

    vastus3.innerHTML = "Sinu lemmikud on: " + valik2;
    vastus3.style.backgroundColor = "lightgreen";

    return valik2;
}

//kasutab teisi funktsioone

function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let nimi=nimilugeminekastist();
    let valik=radioValik();
    let valik2=checkboxValik();

    vastusKoik.innerHTML = "Sinu nimi on: " + nimi + '<br>' +
        'Sinu lemmikud on: ' + valik2 + '<br>' +
        'Sa kasutad ' + valik;
}

function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastusKoik.innerHTML="";


}