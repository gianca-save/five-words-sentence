const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function exercise() {

    rl.question('Inserisci una frasa di almeno 5 parole:\n', (answer) => {
    let isString = false;
    let words = 1;

    for (let i = 0; i<answer.length; i++) {
        if (answer[i] === ' ') {
            ++words;
        }

        if (answer[i].match(/[a-z]/i)) {
            isString = true;
        }
    }

    if ((words >= 5) && (isString === true)) {

        console.log('Bravo, hai inserito una frase di più di 5 parole: ',answer);
        rl.close();
    }

    else if ((words < 5) && (isString === true)) {
        console.log('Errore: hai inserito una frase di meno di 5 parole.\nRiprova');
        exercise();
    }

    else if ((words >= 5) && (isString === false)) {
        console.log('Errore: quella che hai inserito non è una frase (non c\'è neanche una lettera!).\nRiprova');
        exercise();
    }

    else  {
        console.log('Errore: quella che hai inserito non è una frase (non c\'è neanche una lettera!) e non compone nemmeno 5 parole!\nRiprova');
        exercise();
    }

    }); 
}

exercise();