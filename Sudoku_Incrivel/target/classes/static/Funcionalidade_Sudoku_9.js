var numSelecionado = null;

var blocoSelecionado = null;

var erros = 0;

var tabuleiro = [
    "53--7----",
    "6--195---",
    "-98----6-",
    "8---6---3",
    "4--8-3--1",
    "7---2---6",
    "-6----28-",
    "---419--5",
    "----8--79"
];

var solucao = [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
];

window.onload = function () {
    definirJogo();
}

function definirJogo() {
    for (let i = 1; i <= 9; i++) {
        let numero = document.createElement("div");
        numero.id = i;
        numero.innerText = i;
        numero.addEventListener("click", selecionarNumero);
        numero.classList.add("numero");
        document.getElementById("digitos").appendChild(numero);
    }

    for (let l = 0; l < 9; l++) {
        for (let c = 0; c < 9; c++) {
            let bloco = document.createElement("div");
            bloco.id = l.toString() + "-" + c.toString();
            if (tabuleiro[l][c] != "-") {
                bloco.innerText = tabuleiro[l][c];
                bloco.classList.add("bloco-inicial");
            }
            if (l == 2 || l == 5) {
                bloco.classList.add("linha-horizontal");
            }
            if (c == 2 || c == 5) {
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