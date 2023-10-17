const inputPalindroma = document.getElementById('input-palindroma');
const resultPalindroma = document.getElementById('result-palindroma');
const btnPalindroma = document.querySelector('.btn-success');

const inputPD = document.getElementsByName('pd');
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
