const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function lampadaLiga() {
    if (!estaQuebrada()) {
     lampada.src = "./images/ligada.jpg";
    }
}

function lampadaDesliga() {
    if (!estaQuebrada()) {
        lampada.src = "./images/desligada.jpg";
       }
}

function lampadaQuebra() {
    lampada.src = "./images/quebrada.jpg";
}

function estaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

ligar.addEventListener('click', lampadaLiga);
lampada.addEventListener('mouseover', lampadaLiga);
desligar.addEventListener('click', lampadaDesliga);
lampada.addEventListener('mouseleave', lampadaDesliga);
lampada.addEventListener('dblclick', lampadaQuebra);