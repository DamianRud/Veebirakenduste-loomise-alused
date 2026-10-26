
    let auto = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi() {
    return this.mark + " " + this.mudel;
},

    kuvaOmadused() {
    this.omadused.forEach(omadus => console.log(omadus));
}
};

    console.log(auto.taisnimi());
    auto.kuvaOmadused();

    let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    console.log(autod);

    console.log(autod[0]);
    console.log(autod[0].mark);

    autod.forEach((auto) => {
    console.log(`
            Mark: ${auto.mark},
            Mudel: ${auto.mudel},
            Aasta: ${auto.aasta}
        `);
});

    //Lisab uue objekti massiivi lõppu
    autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
    autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });

    //Eemaldab esimese objekti
    autod.splice(0,1);

    //Lisab objekti alates teisest indeksist, ei kustutata midagi
    autod.splice(1,0,{ mark: 'Audi', mudel: 'A4', aasta: 2018 });

    //Otsimine
    let otsing = autod.find(auto=>auto.aasta > 2018 && auto.mark === "Tesla");
    console.log(otsing);

    let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const filtreeritud = arvud.filter(arv => arv % 2 === 0);
    console.log(filtreeritud);

    //Filtreerimine
    let filter = autod.filter(auto=>auto.aasta > 2018);
    console.log(filter);

    autod.sort((a, b) => a.aasta - b.aasta);
    console.log(autod);

    let raamat = {
    pealkiri: "Tõde ja õigus",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    kirjeldus() {
    console.log(this.pealkiri + " - " + this.autor + " - " + this.aasta);
},

    muudaAasta(uusAasta) {
    this.aasta = uusAasta;
}
};

    raamat.kirjeldus();
    raamat.muudaAasta(1930);
    raamat.kirjeldus();

    let raamatukogu = {
    raamatud: [
{ pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
{ pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 1997 },
{ pealkiri: "Näljamängud", autor: "Suzanne Collins", aasta: 2008 }
    ],

    kuvaRaamatud() {
    this.raamatud.forEach((raamat) => {
    console.log(`
                    Pealkiri: ${raamat.pealkiri},
                    Autor: ${raamat.autor},
                    Aasta: ${raamat.aasta}
                `);
});
},

    lisaRaamat(raamat) {
    this.raamatud.push(raamat);
},

    raamatuteArv() {
    console.log("Raamatute arv: " + this.raamatud.length);
},

    parast2000() {
    let raamatud = this.raamatud.filter(raamat => raamat.aasta > 2000);
    console.log("Pärast 2000. aastat: " + raamatud.length);
},

    otsiRaamat(pealkiri) {
    let otsing = this.raamatud.find(raamat => raamat.pealkiri === pealkiri);
    console.log(otsing);
}
};

    raamatukogu.kuvaRaamatud();

    raamatukogu.lisaRaamat({
    pealkiri: "1984",
    autor: "George Orwell",
    aasta: 1949
});

    raamatukogu.kuvaRaamatud();

    raamatukogu.raamatuteArv();

    raamatukogu.parast2000();

    raamatukogu.otsiRaamat("Harry Potter");

    let tulemus = "";

    tulemus += `<h2>Raamat</h2>`;
    tulemus += `<p>Pealkiri: ${raamat.pealkiri}</p>`;
    tulemus += `<p>Autor: ${raamat.autor}</p>`;
    tulemus += `<p>Aasta: ${raamat.aasta}</p>`;

    tulemus += `<h2>Raamatukogu</h2>`;

    raamatukogu.raamatud.forEach((raamat) => {
    tulemus += `
            <p>
                <b>Pealkiri:</b> ${raamat.pealkiri}<br>
                <b>Autor:</b> ${raamat.autor}<br>
                <b>Aasta:</b> ${raamat.aasta}
            </p>
            <hr>
        `;
});

    tulemus += `<p>Raamatute arv: ${raamatukogu.raamatud.length}</p>`;

    let raamatud2000 = raamatukogu.raamatud.filter(
    raamat => raamat.aasta > 2000
    );

    tulemus += `<p>Pärast 2000. aastat: ${raamatud2000.length}</p>`;

    let leitudRaamat = raamatukogu.raamatud.find(
    raamat => raamat.pealkiri === "Harry Potter"
    );

    tulemus += `<p>Otsing: ${leitudRaamat.pealkiri}</p>`;

    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = tulemus;

