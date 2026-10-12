function kinoHind() {
    let vastus3 = document.getElementById('vastus3');
    let pilet = document.getElementsByName('pilet');
    let piletiKogus = document.getElementById('piletiKogus');

    const taiskasvanu = 8;
    const laps = 5;

    let vastusepilt3 = document.getElementById('vastusepilt3');

    for (let i = 0; i < pilet.length; i++) {
        if (pilet[i].checked) {
            if (pilet[i].value === "taiskasvanu") {
                vastus3.innerHTML = piletiKogus.value + ' täiskasvanu pilet = ' +
                    (piletiKogus.value * taiskasvanu) + ' €';
                vastus3.style.color = "green";
                vastusepilt3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpbHQMyPz4bdolU1DUaaHvEGpPAeyBSEvxbX2axuEPw&s=10";
            } else if (pilet[i].value === "laps") {
                vastus3.innerHTML = piletiKogus.value + ' lapse pilet = ' +
                    (piletiKogus.value * laps) + ' €';
                vastus3.style.color = "green";
                vastusepilt3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5gRuMWEAokJ8QB9Kof469z53D45MWimijFIT_Ra6cw&s=10";
            } else {
                vastus3.innerHTML = "vali pileti tüüp";
            }
        }
    }
}