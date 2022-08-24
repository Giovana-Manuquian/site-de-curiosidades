let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual é o primeiro cenário que aparece no episódio?",
    alternativaA : "Central Perk",
    alternativaB : "Apartamento da Monica",
    alternativaC : "Apartamanto do Ross",
    alternativaD : "Casa da Phoebe",
    correta      : "Central Perk",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual foi o primeiro personagem a falar alguma coisa?",
    alternativaA : "Joey",
    alternativaB : "Phoebe",
    alternativaC : "Monica",
    alternativaD : "Chandler",
    correta      : "Monica",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Para qual lugar Rachel iria viajar em sua lua de mel?",
    alternativaA : "Punta Cana",
    alternativaB : "Cáncun",
    alternativaC : "Jamaica",
    alternativaD : "Aruba",
    correta      : "Aruba",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Antes do nome 'Friends' qual seria o nome da série?",
    alternativaA : "Friends Like",
    alternativaB : "Insomnia Cafe",
    alternativaC : "Coffee with Friends",
    alternativaD : "Always Friends",
    correta      : "Insomnia Cafe",

}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O que Rachel aprendeu a fazer pela 1º vez na vida?",
    alternativaA : "Café",
    alternativaB : "Bolo",
    alternativaC : "Pão",
    alternativaD : "Waffle",
    correta      : "Café",

}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual era a aréa em que Dr. Drake Ramoray trabalhava?",
    alternativaA : "Cardiologista",
    alternativaB : "Neurocirurgião",
    alternativaC : "Ortopedista",
    alternativaD : "Pediatra",
    correta      : "Neurocirurgião",

}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual o nome que Phoebe mudou quando casou com Mike?",
    alternativaA : "Regina Phalange Banana Consuela",
    alternativaB : "Princesa Banana Consuela Phalange",
    alternativaC : "Princesa Consuela Banana Hammock",
    alternativaD : "Regina Hammock Banana Phalange",
    correta      : "Princesa Consuela Banana Hammock",

}

const q8 = {
    numQuestao   : 8,
    pergunta     : "O que causou o incêndio no apto de Phoebe e Rachel?",
    alternativaA : "Vela",
    alternativaB : "Prancha",
    alternativaC : "Babyliss",
    alternativaD : "Micro-ondas",
    correta      : "Prancha",

}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual livro Joey colocou no freezer por conta do medo?",
    alternativaA : "The Lord of the Rings",
    alternativaB : "Little Women",
    alternativaC : "Dracula",
    alternativaD : "The Shining",
    correta      : "The Shining",

}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual o nome da modelo presa com Chandler em um caixa 24h?",
    alternativaA : "Candice Swanepoel",
    alternativaB : "Heidi Klum",
    alternativaC : "Jill Goodacre",
    alternativaD : "Irina Shayk",
    correta      : "Jill Goodacre",

} 

const q11 = {
    numQuestao   : 11,
    pergunta     : "Quem disse:'Why do bad things happen to good people'?",
    alternativaA : "Ross",
    alternativaB : "Rachel",
    alternativaC : "Joey",
    alternativaD : "Phoebe",
    correta      : "Ross",

} 

const q12 = {
    numQuestao   : 12,
    pergunta     : "Quem disse:'It's a sunday. I don't move on a sundays'?",
    alternativaA : "Joey",
    alternativaB : "Paul",
    alternativaC : "Ross",
    alternativaD : "Chandler",
    correta      : "Chandler",

} 

const q13 = {
    numQuestao   : 13,
    pergunta     : "Quem disse:'That's not even a word!'?",
    alternativaA : "Joey",
    alternativaB : "Monica",
    alternativaC : "Rachel",
    alternativaD : "Phoebe",
    correta      : "Monica",

} 

const q14 = {
    numQuestao   : 14,
    pergunta     : "Quanto Rachel pagou na mesa de boticário da Pottery Barn?",
    alternativaA : "100 dólares",
    alternativaB : "250 dólares",
    alternativaC : "30 doláres",
    alternativaD : "500 dólares",
    correta      : "500 dólares",

} 

const q15 = {
    numQuestao   : 15,
    pergunta     : "Qual era o nome artístico do pai do Chandler?",
    alternativaA : "Jennifer Turner",
    alternativaB : "Lauren George",
    alternativaC : "Helena Handbasket",
    alternativaD : "Melissa Lynch",
    correta      : "Helena Handbasket",

} 

const q16 = {
    numQuestao   : 16,
    pergunta     : "Qual era o nome da babá que cuidou da Emma?",
    alternativaA : "Julie",
    alternativaB : "Molly",
    alternativaC : "Kathy",
    alternativaD : "Nora",
    correta      : "Molly",

} 

const q17 = {
    numQuestao   : 17,
    pergunta     : "Quantos passos são do apto de Monica/Joey até o 'Central Perk'?",
    alternativaA : "96",
    alternativaB : "97",
    alternativaC : "113",
    alternativaD : "108",
    correta      : "97",

} 

const q18 = {
    numQuestao   : 18,
    pergunta     : "Qual é o n° de identificação do táxi da Phoebe?",
    alternativaA : "3X96",
    alternativaB : "5X82",
    alternativaC : "2X82",
    alternativaD : "2X85",
    correta      : "2X85",

} 

const q19 = {
    numQuestao   : 19,
    pergunta     : "Qual foi a tatuagem que Rachel fez no quadril?",
    alternativaA : "Uma borboleta",
    alternativaB : "Um coração",
    alternativaC : "Um lírio",
    alternativaD : "Um gato",
    correta      : "Um coração",

} 

const q20 = {
    numQuestao   : 20,
    pergunta     : "Qual é a diferença de idade entre Ross e Elizabeth?",
    alternativaA : "5 anos",
    alternativaB : "10 anos",
    alternativaC : "8 anos",
    alternativaD : "12 anos",
    correta      : "12 anos",

} 

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }


    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
        proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont


    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}
