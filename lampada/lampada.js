const ligarEDesligar = document.getElementById('ligarEDesligar');
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

function lampadaLigaEDesliga() {
    if (ligarEDesligar.textContent == "Ligar") {
        lampadaLiga();
        ligarEDesligar.textContent = "Desligar";
    } else {
        lampadaDesliga();
        ligarEDesligar.textContent = "Ligar";
    }
}

function lampadaQuebra() {
    lampada.src = "./images/quebrada.jpg";
}

function estaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

ligarEDesligar.addEventListener('click', lampadaLigaEDesliga);
lampada.addEventListener('mouseover', lampadaLiga);
lampada.addEventListener('mouseleave', lampadaDesliga);
lampada.addEventListener('dblclick', lampadaQuebra);