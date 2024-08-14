const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado:'em que ano o real madrid ganhou sua décima champions?',
        alternativas: [
            {
                texto: "2014",
                afirmacao: "Resposta correta é 2014. "
            },
            {
                texto: "2017",
                afirmacao: "Resposta correta é 2014."
            }
        ]
    },
    {
        enunciado: "quantos gols tem o Cristiano Ronaldo pelo Real madrid?",
        alternativas: [
            {
                texto: '321',
                afirmacao: "são 450 gols pelo real."
            },
            {
                texto: "450",
                afirmacao: "são 450 gol pelo real"
            }
        ]
    },
    {
        enunciado: " Quando o corinthias foi capeão da libertadores?",
        alternativas: [
            {
                texto: "2012.",
                afirmacao: "resposta correta 2012."
            },
            {
                texto: "2013.",
                afirmacao: "resposta correta 2012."
            }
        ]
    },
    {
        enunciado: "quantas chanpions tem o milan?",
        alternativas: [
            {
                texto: "07.",
                afirmacao: "O milan tem 07 champions."
            },
            {
                texto: "10.",
                afirmacao: "O milan tem 07 champions"
            }
        ]
    },
    {
        enunciado: " Qual é a selção com mais copas do mundo? ",
        alternativas: [
            {
                texto: "Alemanha.",
                afirmacao: "é o brasil com 5 copas do mundo."
            },
            {
                texto: "Brasil.",
                afirmacao: "é o brasil com 5 copas do mundo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();