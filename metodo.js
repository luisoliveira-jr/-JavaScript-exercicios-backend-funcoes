//A diferença entre função e método é que o método está dentro do escopo de um objeto e a função não.

const dados = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante",

    determinarFaixaEtaria: function () {
        if (this.idade < 22) {
            return "um Jovem";
        } else if (this.idade < 66) {
            return "um(a) Adulto(a)";
        } else {
            return "um(a) Idoso(a)"
        }
    },

    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);
        console.log(`Olá! Meu nome é ${this.nome}, sou ${faixaEtaria} de ${this.idade} anos, ${this.altura}m e sou ${this.profissao}`);
    }

}

// Chamar método apresentar
dados.apresentar();