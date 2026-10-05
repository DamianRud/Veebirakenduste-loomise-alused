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


    let pilt = document.getElementById("pilt");

    let valik="";

    if(spotify.checked){
        valik=spotify.value;
        pilt.src="../pildid/smail.png"
    } else if(raadio.checked){
        valik=raadio.value;
        pilt.src="../pildid/kurb.png"
    } else if(vinyl.checked){
        valik=vinyl.value;
        pilt.src="../pildid/lill.png"
    } else if(vinyl.checked){
        valik=vinyl.value;
        pilt.src="../pildid/neutral.png"
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

//range
function rangeValik() {
    let vastus4 = document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML = "Sa kuuled muusikat: " + tund.value + " tundi";

    return tund.value;
}

//select
//select
function selectValik() {
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");
    let stiiliPilt = document.getElementById("stiiliPilt");

 
    const pildid = {
        hiphop: "../pildid/smail.png",
        kantri: "../pildid/lill.png",
        rock:   "../pildid/neutral.png",
        metal:  "../pildid/kurb.png"
    };

    if (stiil.selectedIndex !== 0) {
        vastus5.innerHTML = "Sa valisid: " + stiil.value;

        stiiliPilt.src = pildid[stiil.value];
        stiiliPilt.style.display = "block";
    } else {
        vastus5.innerHTML = "palun tee oma valik";
        stiiliPilt.src = "";
        stiiliPilt.style.display = "none";
    }

    return stiil.value;
}





//kasutab teisi funktsioone

function naitaKoike() {
    let vastusKoik = document.getElementById("vastusKoik");
    let nimi = nimilugeminekastist();
    let valik = radioValik();
    let valik2 = checkboxValik();
    let tund = radioValik();
    let stiil = selectValik();
    let arvamus=arvamuslugemine();
    let valik3=radioValik2();
    let jaam = raadiojaamLugemine();

    vastusKoik.innerHTML = "Sinu nimi on: " + nimi + '<br>' +
        'Sinu lemmikud on : ' + valik2 + '<br>' +
        'Sa kasutad ' + valik + '<br>' +
        'Sa kuuled ' + tund + ' tundi<br>' +
        'Sa valisid ' + stiil + '<br>' +
        'sinu arvamus:' + arvamus + '<br>' +
        "sa kuuled radio:" + valik3 + '<br>' +
        "raadiojaam:" + jaam;
}



function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
    vastus9.innerHTML="";
    vastusKoik.innerHTML="";
}





function  arvamuslugemine(){
    let vastus6=document.getElementById("vastus6");
    let arvamus=document.getElementById("arvamus");


    vastus6.innerHTML="teie arvamus: "+arvamus.value;
    vastus6.style.backgroundColor="lightgreen";

    return arvamus.value;
}



function radioValik2() {
    let vastus7 = document.getElementById("vastus7");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    let valik3 = "";
    if (jah.checked) {
        valik3 = jah.value;
    } else if (ei.checked) {
        valik3 = ei.value;
    } else {
        valik3 = "Palun tee oma valik!";
    }

    vastus7.innerHTML = "Valik on: " + valik3;
    return valik3;
}




function raadiojaamLugemine() {
    let vastus9 = document.getElementById("vastus9");
    let raadiojaam = document.getElementById("raadiojaam");

    vastus9.innerHTML = "raadiojaam: " + raadiojaam.value;
    return raadiojaam.value;
}























