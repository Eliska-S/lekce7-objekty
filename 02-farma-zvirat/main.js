/** 

let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
};

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    let zvire = document.createElement('div');
    zvire.className = 'zvire';

    let zvire2 = document.createElement('div');
    zvire2.className = 'zvire';


// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = krava.foto;

    let fotoZvirete2 = document.createElement('img');
    fotoZvirete2.className = 'foto';
    fotoZvirete2.src = ovecka.foto;

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    let jmenoZvirete = document.createElement('span');
    jmenoZvirete.className = 'jmeno';
    jmenoZvirete.innerHTML = krava.jmeno;

    let jmenoZvirete2 = document.createElement('span');
    jmenoZvirete2.className = 'jmeno';
    jmenoZvirete2.innerHTML = ovecka.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    zvire2.appendChild(fotoZvirete2);
    zvire2.appendChild(jmenoZvirete2);

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

    let farma = document.querySelector('.farma');
    farma.appendChild(zvire);
    farma.appendChild(zvire2);
*/  

// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?

let poleZvirat = [
    {jmeno:'Kráva',foto:'obrazky/krava.jpg'},
    {jmeno:'Ovečka',foto:'obrazky/ovce.jpg'},
    {jmeno:'Husa',foto:'obrazky/husa.jpg'},
    {jmeno:'Kočka',foto:'obrazky/kocka.jpg'},
    {jmeno:'Kůň',foto:'obrazky/kun.jpg'},
    {jmeno:'Pes',foto:'obrazky/pes.jpg'},
];

poleZvirat.forEach(vlozNaStranku)

function vlozNaStranku(zvire) {
    let element = document.createElement('div');
    element.className = 'zvire';

    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = zvire.foto;

    let jmenoZvirete = document.createElement('span');
    jmenoZvirete.className = 'jmeno';
    jmenoZvirete.innerHTML = zvire.jmeno;

    element.appendChild(fotoZvirete);
    element.appendChild(jmenoZvirete);

    let farma = document.querySelector('.farma');
    farma.appendChild(element);
 }