const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    addProduto: function (produto) {

        let temNoCarrinho = false;

        for (let item of this.produtos) {
            if (produto.id == item.id) {
                item.qtd = item.qtd + produto.qtd;
                temNoCarrinho = true;
            }
        }

        if (!temNoCarrinho) {
            this.produtos.push(produto)
        }

    },

    calcularTotalDeItens: function () {
        let totalDeItens = 0;

        for (produto of this.produtos) {
            totalDeItens = totalDeItens + produto.qtd;
        }
        return totalDeItens

    },

    calcularDesconto: function () {
        let desconto = 0;
        let dezPorcento = 0;
        let maisBarato = this.calcularTotalAPagar();

        if (this.calcularTotalDeItens() > 4) {
            for (produto of this.produtos) {
                if ((produto.precoUnit / 100) < maisBarato) {
                    maisBarato = (produto.precoUnit / 100)
                }

            }
        }

        if (this.calcularTotalAPagar() > 100) {
            dezPorcento = (this.calcularTotalAPagar() / 100) * 10;
        }

        if (maisBarato > dezPorcento) {
            desconto = maisBarato
        } else {
            desconto = dezPorcento
        }

        return desconto
    },

    calcularTotalAPagar: function () {
        let totalPagar = 0;
        let totalTipo = 0;
        let totalPagarConvertido = 0;

        for (produto of this.produtos) {
            totalTipo = produto.qtd * produto.precoUnit;
            totalPagar = totalPagar + totalTipo;
            totalPagarConvertido = totalPagar / 100;
        }
        return totalPagarConvertido.toFixed(2)

    },

    imprimirResumo: function () {

        let totalPagar = 0;

        console.log("Cliente: ", this.nomeDoCliente);
        console.log("Total de itens: ", this.calcularTotalDeItens());
        console.log("Sub Total: R$", this.calcularTotalAPagar());
        console.log("Desconto: R$", this.calcularDesconto());
        totalPagar = this.calcularTotalAPagar() - this.calcularDesconto()
        console.log("Total a pagar: R$", totalPagar);
    },

    imprimirDetalhes: function () {

        console.log("Cliente: ", this.nomeDoCliente);

        let item = 0;
        let totalTipo = 0;

        for (produto of this.produtos) {
            totalTipo = produto.qtd * produto.precoUnit;
            item++
            let totalTipoConvertido = totalTipo / 100;
            console.log(`Item ${item} - ${produto.nome} - ${produto.qtd} und - R$ ${totalTipoConvertido.toFixed(2)}`)
        }
        console.log("Total de itens: ", this.calcularTotalDeItens());
        console.log("Sub total: R$", this.calcularTotalAPagar());
        console.log("Total de descontos: R$", this.calcularDesconto());
        let totalPagar = 0;
        totalPagar = this.calcularTotalAPagar() - this.calcularDesconto()
        console.log("Total a pagar: R$", totalPagar);

    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);


console.log("RESUMIDO");
carrinho.imprimirResumo();

console.log("DETALHADO");
carrinho.imprimirDetalhes();

