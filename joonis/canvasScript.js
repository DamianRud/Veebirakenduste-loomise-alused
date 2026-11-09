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
    if(canvas.getContext('2d')) {
        let tx= canvas.getContext('2d');//2d tasand
        tx.fillRect(100,150,200,250);
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
