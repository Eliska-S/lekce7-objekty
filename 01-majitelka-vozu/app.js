// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..

let auto = {
    znacka: 'Volvo',
    barva: 'černá',
    rokVyroby: 2006,
    spz: '3P50959',
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)

auto.majitel = {};
auto.majitel.jmeno = 'Eliška';
auto.majitel.prijmeni = 'Šibrová';

// Přepiš značku na Škoda

auto.znacka = 'Škoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.

let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
let znacka = auto.znacka;
let spz = auto.spz;

document.querySelector('#majitelka').innerHTML = majitelka;
document.querySelector('#znacka').innerHTML = znacka;
document.querySelector('#spz').innerHTML = spz;