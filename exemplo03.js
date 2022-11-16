function determinarFaixaEtaria(idade) {
    if (idade < 22) {
        return "um Jovem";
    } else if (idade < 66) {
        return "um(a) Adulto(a)";
    } else {
        return "um(a) Idoso(a)"
    }
}

function apresentar(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(dados.idade);
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m e sou ${pessoa.profissao}`);
}

const dados = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

apresentar(dados);

