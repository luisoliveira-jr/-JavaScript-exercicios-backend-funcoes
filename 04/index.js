const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo = this.saldo + valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        })
        let valorReais = valor / 100;
        console.log("Deposito de R$", valorReais.toFixed(2), "realizado para o cliente:", this.nome);

    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque de:", this.nome)
        } else {
            this.saldo = this.saldo - valor;
            this.historicos.push({
                tipo: "Saque",
                valor: valor
            })
            let valorReais = valor / 100;
            console.log("Saque de R$", valorReais.toFixed(2), "realizado para o cliente:", this.nome);
        }
    },

    extrato: function () {
        this.saldo = this.saldo / 100;
        console.log("Extrato de", this.nome, "- Saldo: R$", this.saldo.toFixed(2))
        console.log("Histórico:")

        for (let transacao of this.historicos) {
            transacao.valor = transacao.valor / 100;
            console.log(transacao.tipo, "de R$", transacao.valor.toFixed(2));
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();

