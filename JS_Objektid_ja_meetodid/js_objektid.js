// Auto objekti loomine
let auto = {
    // Auto omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    // Meetod tagastab auto margi ja mudeli
    taisnimi() {
        return this.mark + " " + this.mudel;
    },

    // Meetod kuvab kõik auto omadused
    kuvaOmadused() {
        this.omadused.forEach(omadus => console.log(omadus));
    }
};

// Auto täisnime ja omaduste kuvamine
console.log(auto.taisnimi());
auto.kuvaOmadused();


// Autode massiivi loomine
let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

// Kogu massiivi kuvamine
console.log(autod);

// Esimese auto kuvamine
console.log(autod[0]);

// Esimese auto margi kuvamine
console.log(autod[0].mark);

// Kõikide autode andmete kuvamine
autod.forEach((auto) => {
    console.log(`
            Mark: ${auto.mark},
            Mudel: ${auto.mudel},
            Aasta: ${auto.aasta}
        `);
});

// Lisab uue objekti massiivi lõppu
autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });

// Lisab uue objekti massiivi algusesse
autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });

// Eemaldab esimese objekti
autod.splice(0,1);

// Lisab objekti alates teisest indeksist, ei kustutata midagi
autod.splice(1,0,{ mark: 'Audi', mudel: 'A4', aasta: 2018 });

// Otsib Tesla autot, mille aasta on suurem kui 2018
let otsing = autod.find(auto=>auto.aasta > 2018 && auto.mark === "Tesla");
console.log(otsing);

// Arvude massiivi loomine
let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtreerib ainult paarisarvud
const filtreeritud = arvud.filter(arv => arv % 2 === 0);
console.log(filtreeritud);

// Filtreerib autod, mille aasta on suurem kui 2018
let filter = autod.filter(auto=>auto.aasta > 2018);
console.log(filter);

// Sorteerib autod aasta järgi kasvavas järjekorras
autod.sort((a, b) => a.aasta - b.aasta);
console.log(autod);


// Raamatu objekti loomine
let raamat = {
    pealkiri: "Tõde ja õigus",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    // Kuvab raamatu kirjelduse
    kirjeldus() {
        console.log(this.pealkiri + " - " + this.autor + " - " + this.aasta);
    },

    // Muudab raamatu väljaandmise aastat
    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};

// Kuvab raamatu enne muutmist
raamat.kirjeldus();

// Muudab raamatu aastat
raamat.muudaAasta(1930);

// Kuvab raamatu pärast muutmist
raamat.kirjeldus();


// Raamatukogu objekti loomine
let raamatukogu = {
    // Raamatute massiiv
    raamatud: [
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 1997 },
        { pealkiri: "Näljamängud", autor: "Suzanne Collins", aasta: 2008 }
    ],

    // Kuvab kõik raamatud konsoolis
    kuvaRaamatud() {
        this.raamatud.forEach((raamat) => {
            console.log(`
                    Pealkiri: ${raamat.pealkiri},
                    Autor: ${raamat.autor},
                    Aasta: ${raamat.aasta}
                `);
        });
    },

    // Lisab uue raamatu massiivi
    lisaRaamat(raamat) {
        this.raamatud.push(raamat);
    },

    // Kuvab raamatute koguarvu
    raamatuteArv() {
        console.log("Raamatute arv: " + this.raamatud.length);
    },

    // Loendab pärast 2000. aastat ilmunud raamatud
    parast2000() {
        let raamatud = this.raamatud.filter(raamat => raamat.aasta > 2000);
        console.log("Pärast 2000. aastat: " + raamatud.length);
    },

    // Otsib raamatu pealkirja järgi
    otsiRaamat(pealkiri) {
        let otsing = this.raamatud.find(raamat => raamat.pealkiri === pealkiri);
        console.log(otsing);
    }
};

// Kuvab kõik raamatud enne uue raamatu lisamist
raamatukogu.kuvaRaamatud();

// Lisab raamatu "1984"
raamatukogu.lisaRaamat({
    pealkiri: "1984",
    autor: "George Orwell",
    aasta: 1949
});

// Kuvab kõik raamatud pärast lisamist
raamatukogu.kuvaRaamatud();

// Kuvab raamatute koguarvu
raamatukogu.raamatuteArv();

// Kuvab pärast 2000. aastat ilmunud raamatute arvu
raamatukogu.parast2000();

// Otsib raamatut "Harry Potter"
raamatukogu.otsiRaamat("Harry Potter");


// HTML-i tulemuste koostamine
let tulemus = "";

// Raamatu andmete lisamine HTML-i
tulemus += `<h2>Raamat</h2>`;
tulemus += `<p>Pealkiri: ${raamat.pealkiri}</p>`;
tulemus += `<p>Autor: ${raamat.autor}</p>`;
tulemus += `<p>Aasta: ${raamat.aasta}</p>`;

// Raamatukogu pealkirja lisamine
tulemus += `<h2>Raamatukogu</h2>`;

// Kõikide raamatute lisamine HTML-i
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

// Raamatute koguarvu lisamine HTML-i
tulemus += `<p>Raamatute arv: ${raamatukogu.raamatud.length}</p>`;

// Pärast 2000. aastat ilmunud raamatute leidmine
let raamatud2000 = raamatukogu.raamatud.filter(
    raamat => raamat.aasta > 2000
);

// Tulemuse lisamine HTML-i
tulemus += `<p>Pärast 2000. aastat: ${raamatud2000.length}</p>`;

// Raamatu otsimine pealkirja järgi
let leitudRaamat = raamatukogu.raamatud.find(
    raamat => raamat.pealkiri === "Harry Potter"
);

// Otsingu tulemuse lisamine HTML-i
tulemus += `<p>Otsing: ${leitudRaamat.pealkiri}</p>`;

// HTML-elemendi leidmine
let vastus2 = document.getElementById("vastus2");

// Kõikide koostatud tulemuste kuvamine HTML-lehel
vastus2.innerHTML = tulemus;