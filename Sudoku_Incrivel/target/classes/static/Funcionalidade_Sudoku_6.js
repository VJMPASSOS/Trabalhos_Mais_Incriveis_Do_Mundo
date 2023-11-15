var numSelecionado = null;

var blocoSelecionado = null;

var erros = 0;

var tabuleiro = [
    "---3--",
    "--3-54",
    "3--4--",
    "--4--3",
    "63-1--",
    "--5---"
];

var solucao = [
    "546321",
    "123654",
    "351462",
    "264513",
    "632145",
    "415236"
];

window.onload = function () {
    definirJogo();
}

function definirJogo() {
    for (let i = 1; i <= 6; i++) {
        let numero = document.createElement("div");
        numero.id = i;
        numero.innerText = i;
        numero.addEventListener("click", selecionarNumero);
        numero.classList.add("numero");
        document.getElementById("digitos").appendChild(numero);
    }

    for (let l = 0; l < 6; l++) {
        for (let c = 0; c < 6; c++) {
            let bloco = document.createElement("div");
            bloco.id = l.toString() + "-" + c.toString();
            if (tabuleiro[l][c] != "-") {
                bloco.innerText = tabuleiro[l][c];
                bloco.classList.add("bloco-inicial");
            }
            if (l == 1||l==3) {
                bloco.classList.add("linha-horizontal");
            }
            if (c == 2) {
                bloco.classList.add("linha-vertical");
            }
            bloco.addEventListener("click", selecionarBloco);
            bloco.classList.add("bloco");
            document.getElementById("tabuleiro").appendChild(bloco);
        }
    }
}

function selecionarNumero() {
    if (numSelecionado != null) {
        numSelecionado.classList.remove("numero-selecionado");
    }
    numSelecionado = this;
    numSelecionado.classList.add("numero-selecionado")
}

function selecionarBloco() {
    if (numSelecionado) {
        if (this.innerText != "") {
            return;
        }

        let coordenadas = this.id.split("-");
        let l = parseInt(coordenadas[0]);
        let c = parseInt(coordenadas[1]);

        if (solucao[l][c] == numSelecionado.id) {
            this.innerText = numSelecionado.id;
        }
        else {
            erros += 1;
            document.getElementById("erros").innerText = erros;
        }
    }
}