const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,

    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let acertos = 0;

function corrigirProva(prova) {

    let peso = prova.valor / prova.questoes.length;

    for (let questao of prova.questoes) {
        if (questao.resposta == questao.correta) {
            acertos = acertos + 1
        }
    }

    let nota = acertos * peso

    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`)

}

corrigirProva(prova)