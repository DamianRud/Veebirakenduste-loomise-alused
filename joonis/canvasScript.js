const canvas = document.getElementById('canvas');//määrame canvas element
const tx = canvas.getContext('2d'); //2d tasand

function joon() {
    if(canvas.getContext('2d')) {
        let tx= canvas.getContext('2d');//2d tasand
        tx.beginPath();
        tx.strokeStyle="black"
        tx.lineWidth = 3;
        tx.moveTo(50,50);//alguspunkt
        tx.lineTo(200, 280);//lõpppunkt
        tx.stroke();
    }
}

function puhasta() {
    const canvas = document.getElementById('canvas');//määrame canvas
    if(canvas.getContext('2d')) {
        let tx= canvas.getContext('2d');//2d tasand
        tx.clearRect(0,0,400,400);
    }
}


function kolmnurk() {
    const canvas = document.getElementById('canvas');//määrame canvas element

    if(canvas.getContext('2d')) {
        let tx= canvas.getContext('2d');//2d tasand
        tx.beginPath();
        tx.fillStyle="black"
        tx.lineWidth = 3;
        tx.strokeStyle="black"
        tx.moveTo(50,50);//alguspunkt
        tx.lineTo(200, 280);
        tx.lineTo(30, 350);
        tx.lineTo(50, 50);//lõpppunkt
        tx.fill();//taust
        tx.stroke();//välisjoon
    }
}

function ristkylik() {
    const canvas = document.getElementById('canvas');//määrame canvas
    let l=document.getElementById('laius');
    let k=document.getElementById('Kõrgus');
    if(canvas.getContext('2d')) {
        let tx= canvas.getContext('2d');//2d tasand
        tx.fillRect(100,150,l.value,k.value);
    }
}


//ümberjoon
//ring




function ring() {
    const canvas = document.getElementById('canvas');//määrame canvas
    const r=document.getElementById('raadius');
    if(canvas.getContext('2d')) {
        let tx= canvas.getContext('2d');//2d tasand
        tx.beginPath();
        tx.strokeStyle="yellow"
        tx.fillStyle="black"
        tx.arc(100,100,r.value,0,2*Math.PI,true);//x,y -keskpunkt R-raadius
        tx.fill();
        tx.stroke()
    }
}
function pilt(){
    const canvas = document.getElementById('canvas');//määrame canvas element

    if(canvas.getContext('2d')) {
        let tx = canvas.getContext('2d');//2d tasand
        const fail=new Image();
        fail.src="https://picsum.photos/100/100?random=2";
        fail.onload=()=>{
            tx.drawImage(fail,50,50,100,100);
        }
    }
}


function ratas1() {
    tx.beginPath();
    tx.strokeStyle = "black";
    tx.lineWidth = 3;
    tx.arc(100, 240, 20, 0, 2 * Math.PI, true);
    tx.stroke();
}

function ratas2() {
    tx.beginPath();
    tx.strokeStyle = "black";
    tx.lineWidth = 3;
    tx.arc(280, 240, 20, 0, 2 * Math.PI, true);
    tx.stroke();
}

function korpus() {
    tx.beginPath();
    tx.strokeStyle = "black";
    tx.lineWidth = 3;

    tx.moveTo(40, 140);
    tx.lineTo(340, 140);
    tx.lineTo(340, 220);
    tx.lineTo(40, 220);
    tx.lineTo(40, 140);

    tx.moveTo(120, 140);
    tx.lineTo(120, 90);
    tx.lineTo(240, 90);
    tx.lineTo(240, 140);
    tx.lineTo(120, 140);

    tx.stroke();
}
function keskpunktid() {
    tx.beginPath();
    tx.fillStyle = "black";
    tx.arc(100, 240, 6, 0, 2 * Math.PI, true);
    tx.fill();

    tx.beginPath();
    tx.arc(280, 240, 6, 0, 2 * Math.PI, true);
    tx.fill();
}


function tuled() {
    tx.beginPath();
    tx.strokeStyle = "black";
    tx.lineWidth = 3;

    tx.moveTo(340, 165);
    tx.lineTo(380, 150);

    tx.moveTo(340, 180);
    tx.lineTo(385, 180);

    tx.moveTo(340, 195);
    tx.lineTo(380, 210);

    tx.stroke();
}

function aken() {
    tx.fillStyle = "lightblue";
    tx.fillRect(120, 90, 120, 50);
}