const inputPalindroma = document.getElementById('input-palindroma');
const resultPalindroma = document.getElementById('result-palindroma');
const btnPalindroma = document.querySelector('.btn-success');

const pari = document.getElementById('pari');
const dispari = document.getElementById('dispari');
const inputNumber = document.getElementById('input-number');
const resultPD = document.getElementById('result-pd');
const btnPD = document.querySelector('.btn-primary');

btnPalindroma.addEventListener('click',function() {
    const world = inputPalindroma.value;
    if(!isNaN(world)){
        resultPalindroma.innerHTML = 'INSERIRE LETTERE E NON LASCIARE VUOTO';
        return;
    }
    resultPalindroma.innerHTML = (checkPalindroma(world)) ? 'la palora inserita è palindroma' : 'la parola inserita non è palindroma';
});

btnPD.addEventListener('click', function(){
    const number = parseInt(inputNumber.value);
    if(isNaN(number) || number < 1 || number > 5) {
        resultPD.innerHTML = 'INSERIRE SOLO NUMERI, DA 1 A 5';
        return;
    }
    const computerNumber = randomInteger(1,5);
    resultPD.innerHTML = ((pariODispari(number+computerNumber) && pari.checked) || (!pariODispari(number+computerNumber) && dispari.checked))
    ? `il computer ha fatto ${computerNumber} per un totale di <strong>${computerNumber + number}</strong>, hai vinto` 
    : `il computer ha fatto ${computerNumber} per un totale di <strong>${computerNumber + number}</strong>, hai perso L`;
});