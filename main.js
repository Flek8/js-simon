
const element = document.getElementById('target');

const numeriGenerati = [];

while (numeriGenerati.length < 5) {
    
    let numero = numeroCasuale(1, 100);

    if (!numeriGenerati.includes(numero)) {
        numeriGenerati.push(numero);
    }
}

element.innerHTML = numeriGenerati;

setTimeout(cancellaNumeri, 3*1000)

setTimeout(tentativiNumeri,4*1000)


function numeriInseriti() {

    const numeriUtente = [];

    while (numeriUtente.length < 5) {

        let numero = parseInt(prompt('Inserisci uno dei numeri che hai appena visualizzato'));
        if (!numeriUtente.includes(numero) && !isNaN(numero) && numero <= 100 && numero > 0) {
            numeriUtente.push(numero)
        }
    }
    return numeriUtente
}


function numeriIndovinatiUtente(numeriIndovinati) {

    let quantitaNumeriEsatti = numeriIndovinati.length

    if (quantitaNumeriEsatti == 1) {
        element.innerHTML = 'Hai indovinato ' + quantitaNumeriEsatti + ' numero: ' + numeriIndovinati;
    } else {
        element.innerHTML = 'Hai indovinato ' + quantitaNumeriEsatti + ' numeri: ' + numeriIndovinati;

    }

}


function tentativiNumeri() {

    let numeriInseritiUtente = numeriInseriti();

    let numeriIndovinati = verificaNumeri(numeriGenerati, numeriInseritiUtente);

    numeriIndovinatiUtente(numeriIndovinati);
}



function verificaNumeri(numeriDaIndovinare, numeriDaVerificare) {

    let numeriEsatti = [];

    for (let i = 0; i < numeriDaVerificare.length; i++) {
        if (numeriDaIndovinare.includes(numeriDaVerificare[i])) {
            numeriEsatti.push(numeriDaVerificare[i])
        } 
    }

    return numeriEsatti;
}

// funzione per nascondere i numeri generati
function cancellaNumeri() {
    element.innerHTML = '';
}

// genera un numero casuale compreso tra min e max
function numeroCasuale(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
};