
//valikeel
function valikeeled() {

    let keeled = "";

    if (document.getElementById("javascript").checked) {
        keeled = keeled + "JavaScript ";
    }

    if (document.getElementById("python").checked) {
        keeled = keeled + "Python ";
    }

    if (document.getElementById("java").checked) {
        keeled = keeled + "Java ";
    }

    if (document.getElementById("csharp").checked) {
        keeled = keeled + "C# ";
    }

    if (document.getElementById("php").checked) {
        keeled = keeled + "PHP ";
    }

    document.getElementById("keeledtulemus").innerHTML =
        "Sinu valitud programmeerimiskeeled: " + keeled;
}

//vali arvamus
function arvamuseNaitamine() {
    let arvamus = document.getElementById("arvamus").value;

    document.getElementById("arvamusTulemus").innerHTML =
        "Sinu arvamus: " + arvamus;
}


//vali tundi
function tundideNaitamine() {
    let tunnid = document.getElementById("tunnid").value;

    document.getElementById("tunnidTulemus").innerHTML =
        "Tegeled programmeerimisega " + tunnid + " tundi nädalas.";
}


// vali ja või ei
function meeldibJah() {
    document.getElementById("meeldibTulemus").innerHTML =
        "Programmeerimine meeldib!";

    document.getElementById("smile").innerHTML = "😊";
}


function meeldibEi() {
    document.getElementById("meeldibTulemus").innerHTML =
        "Programmeerimine ei meeldi.";

    document.getElementById("smile").innerHTML = "😢";
}


//vali tooristad
function tooriistadeNaitamine() {
    let tooriistad = document.getElementById("tooriistad").value;

    document.getElementById("tooriistadTulemus").innerHTML =
        "Sinu nimetatud tööriistad: " + tooriistad;
}



//vali keel
function keeleNaitamine() {
    let keel = document.getElementById("keel").value;

    document.getElementById("keelTulemus").innerHTML =
        "Sinu valik: " + keel;
}


//saada
function saada() {
    let nimi = document.getElementById("arvamus").value;
    let tunnid = document.getElementById("tunnid").value;
    let tooriistad = document.getElementById("tooriistad").value;
    let keel = document.getElementById("keel").value;

    document.getElementById("kokkuvote").innerHTML =
        '<h2>Kokkuvõte</h2>' +
        'Arvamus: ' + nimi + '<br>' +
        'Tunnid nädalas: ' + tunnid + '<br>' +
        'Tööriistad: ' + tooriistad + '<br>' +
        'Õpitav keel: ' + keel;

}

//pusahta
function puhasta() {
    document.getElementById("arvamus").value = "";
    document.getElementById("tunnid").value = "";
    document.getElementById("tooriistad").value = "";
    document.getElementById("keel").value = "";

    document.getElementById("javascript").checked = false;
    document.getElementById("python").checked = false;
    document.getElementById("java").checked = false;
    document.getElementById("csharp").checked = false;
    document.getElementById("php").checked = false;

    document.getElementById("Jah").checked = false;
    document.getElementById("Ei").checked = false;

    document.getElementById("kokkuvote").innerHTML = "";
}