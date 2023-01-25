
function somar() {

    let tn1 = document.getElementById('txt1');
    let tn2 = document.getElementById('txt2');
    let res = document.getElementById('resultado');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let soma = n1 + n2;

    res.innerHTML = `O calculo de ${n1} + ${n2} é = <strong> ${soma} </strong>`;

}

function subtrair() {

    let tn1 = document.querySelector('input#txt1sub1');
    let tn2 = document.querySelector('input#txt2sub2');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let res = document.querySelector('#resultado');

    let sub = n1 - n2;

    res.innerHTML = `O calculo de ${n1} - ${n2} é = <strong> ${sub} </strong>`;

}

function multiplicar() {

    let tn1 = document.querySelector('input#txt1mult1');
    let tn2 = document.querySelector('input#txt2mult2');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let res = document.querySelector('#resultado');

    let mult = n1 * n2;

    res.innerHTML = ` ${n1} multiplicado por ${n2} é = <strong> ${mult} </strong>`;

}

function dividir() {

    let tn1 = document.querySelector('input#txt1div1');
    let tn2 = document.querySelector('input#txt2div2');
    let n1 = (tn1.value);
    let n2 = (tn2.value);
    let res = document.querySelector('#resultado');

    let div = n1 / n2;

    res.innerHTML = `${n1} dividido por ${n2} é = <strong> ${div} </strong>`;

}







