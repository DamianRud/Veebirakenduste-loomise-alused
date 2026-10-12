function teisandamine() {
    let vastus = document.getElementById('vastus');
    let valik = document.getElementsByName('valik'); //mitu elementi ühe nimeta
    let arv = document.getElementById('arv');

    const toll = 39.37;
    const meeter = 0.0254;

    let vastusepilt = document.getElementById('vastusepilt');

    //tsükli
    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            if (valik[i].value === "meeter") {
                vastus.innerHTML = arv.value + ' meetri = ' +
                    ( arv.value * toll).toFixed(1)+ ' tolli';
                vastus.style.color="pink"
                vastusepilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqdkjm2RGKu9IX2GrS6704ShaAuX2aEy0Jlmor8DyQA&s=10";
            } else if (valik[i].value === "tolli") {
                vastus.innerHTML = arv.value + ' tolli = ' +
                    arv.value * meeter + ' meetrit';
                vastus.style.color="pink"
                vastusepilt.src="https://www.inserv.lv/storage/products/large/4d/4d708283-a984-4b91-884b-ea42d649470c.jpg"
            } else {
                vastus.innerHTML = "vali ühiku - kas meeter või toll";
            }
        }
    }
}

