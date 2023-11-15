var numSelecionado = null;

var blocoSelecionado = null;

var erros = 0;

var tabuleiro = [
    "----",
    "2-3-",
    "-1-2",
    "----"
];

var solucao = [
    "1324",
    "2431",
    "3142",
    "4213"
];

window.onload = function () {
    definirJogo();
}

function definirJogo() {
    for (let i = 1; i <= 4; i++) {
        let numero = document.createElement("div");
        numero.id = i;
        numero.innerText = i;
        numero.addEventListener("click", selecionarNumero);
        numero.classList.add("numero");
        document.getElementById("digitos").appendChild(numero);
    }

    for (let l = 0; l < 4; l++) {
        for (let c = 0; c < 4; c++) {
            let bloco = document.createElement("div");
            bloco.id = l.toString() + "-" + c.toString();
            if (tabuleiro[l][c] != "-") {
                bloco.innerText = tabuleiro[l][c];
                bloco.classList.add("bloco-inicial");
            }
            if (l == 1) {
                bloco.classList.add("linha-horizontal");
            }
            if (c == 1) {
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