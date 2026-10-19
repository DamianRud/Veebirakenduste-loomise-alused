const now = new Date();

const paev = now.getDate();

console.log("Tänane päev "+ paev +" päev");//tagastab päeva

const kuu=now.getMonth()+1;// tagastab kuu 0-11
console.log("Kuu number on "+kuu);

const aasta =now.getFullYear();//tagastab aasta
console.log("aasta koku number on "+aasta);

const nadalapaev=now.getDay(); //0-6 kus on 0-pühapäev
console.log("nadalapaev number on "+nadalapaev);


function tana(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML= "Täna on "+ paev+"."+kuu+"."+aasta;
}

//lisa veel getHours getMinutes() ja lise veel üks funktsioon
//mis näitab aeg-kellaaeg

const aeg = new Date();

let tunnid = aeg.getHours();
let minutid = aeg.getMinutes();
let sekundid = aeg.getSeconds();

function naitaKellaaega() {
    let vastus=document.getElementById("vastus");
    vastus.innerHTML="kell on"+tunnid+"."+minutid+"."+sekundid;
}


const konsultatsioon = new Date(2009, 10, 30); // 2.11.2026
const vahe = konsultatsioon.getTime() - now.getTime();
const konspaev = vahe / (1000 * 60 * 60 * 24); // sekundid*minutid*tunnid

console.log("Konsultatsiooni nädalani " + konspaev.toFixed(0));


