function prostaFunkcja() {
    console.log('Wywołanie funkcji');

}

prostaFunkcja();

function prostaFunkcja1(param1, param2) {
    console.log('Wywołanie funkcji dla parametrów:' + param1 + ' ' + param2);

}

prostaFunkcja1('jeden', 'dwa');

function sum(liczbaPierwsza, liczbaDruga) {
    var wynik;
    wynik = liczbaPierwsza + liczbaDruga;
    return wynik;


}

console.log('Wynik sumowania: ' + sum(10,3));