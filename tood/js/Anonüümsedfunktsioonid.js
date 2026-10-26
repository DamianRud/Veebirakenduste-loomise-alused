// var tervita = function() {
//     console.log("Tere maailm!");
// };
//
// tervita();
//
//
// var summa = function(a, b) {
//     return a + b;
// };
//
// var tulemus = summa(3, 5);
// console.log(tulemus); // Väljund: 8
//
//
// setTimeout(function() {
//     console.log("Tere pärastlõunast!");
// }, 1000);
//
// var array = [1, 2, 3, 4, 5];
//
// array.forEach(function(element) {
//     console.log(element);
// });
//
// const array2 = [1, 2, 3, 4, 5];
//
// array2.forEach(function(element, index, array) {
//     console.log("Element:", element);
//     console.log("Index:", index);
//     console.log("Array:", array);
// });
//
// (function() {
//     var x = 10;
//     console.log(x); // Output: 10
// })();


// const noolFunktsioon = () => {
//     console.log("Tere noolfunktsioon!");
// };
//
// noolFunktsioon();
//
//
// const noolFunktsioon = () => console.log("Tere noolfunktsioon!");
// noolFunktsioon();


// let tervita = (nimi) => {console.log(`Tere ${nimi}`)};
// tervita("Juhan");
// let tervita2 = nimi => console.log(`Tere ${nimi}`);
// tervita2("Mari");
//
// let liitmine = (a, b) => {
//     let result = a + b;
//     return result;
// };
// console.log(liitmine(3,5));

// let liitmine = (a, b) => a + b;
// console.log(liitmine(3,5));
//
// const array = [1, 2, 3, 4, 5];
// array.forEach(element => console.log(element));
//
// const number = 5;
// const isEven = number => number % 2 === 0 ? "paaris" : "paaritu";
//
// console.log(isEven(number)); // Väljund: paaritu
//
// const arvud = [1, 2, 3, 4, 5];
//
// arvud.forEach(nr => {
//     const paaris = nr % 2 === 0 ? "paaris" : "paaritu";
//     console.log(`${nr} is ${paaris}`);
// });
//
//
// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// nimed.forEach(function(nimi) {
//     console.log(`<li>${nimi}</li>`);
// });


// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// const kasutaja = function(nimi) {
//     console.log(`<li>${nimi}</li>`);
// };
//
// nimed.forEach(kasutaja);

//
// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// //pikalt
// const kasutaja = nimi => console.log(`<li>${nimi}</li>`);
// nimed.forEach(kasutaja);
//
// //lühidalt
// nimed.forEach(nimi => console.log(`<li>${nimi}</li>`));




// const teostaAJAXPäring = (url, callback) => {
//     setTimeout(() => {
//         const vastus = "Vastus andmebaasist";
//         callback(vastus);
//     }, 2000);
// };
//
// const callbackFunktsioon = (vastus) => {
//     console.log("Vastus saadud:", vastus);
// };
//
// teostaAJAXPäring("https://api.example.com/data", callbackFunktsioon);


// function minuNimi() {
//     console.log("Damian");
// }
//
// minuNimi();
//
// const minuNimi2 = () => console.log("Damian");
//
// minuNimi2();
//
//
// function kuupaevEesti(kuupaev) {
//     let kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
//
//     let osad = kuupaev.split(".");
//
//     console.log(osad[0] + ". " + kuud[osad[1] - 1]);
// }
//
// kuupaevEesti("19.07.25");


// function arvuta(arvud) {
//     let summa = 0;
//
//     arvud.forEach(function(arv) {
//         summa += arv;
//     });
//
//     return {
//         koguarv: arvud.length,
//         keskmine: summa / arvud.length
//     };
// }
//
// console.log(arvuta([2, 4, 6, 8, 10]));

const leiaUnikaalsedNimed = nimed => {
    let unikaalsed = [];

    nimed.forEach(nimi => {
        if (unikaalsed.indexOf(nimi) === -1) {
            unikaalsed.push(nimi);
        }
    });

    return unikaalsed;
};

console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));
