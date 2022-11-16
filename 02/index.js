const carro = {
    ligado: false,
    velocidade: 0,

    textoAlerta: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado")
        } else {
            console.log("Este carro já está desligado")
        }
    },

    textoAtualizacao: function () {
        if (this.ligado) {
            console.log("Carro ligado. Velocidade:", this.velocidade)
        }
    },

    ligar: function () {
        if (this.ligado) {
            this.textoAlerta()
        } else {
            this.ligado = true;
            this.textoAtualizacao();
        }
    },

    desligar: function () {

        if (this.velocidade > 0) {
            console.log("Não é possível desligar o carro em movimento!");
        } else {
            if (!this.ligado) {
                this.textoAlerta()
            } else {
                this.ligado = false;
                this.velocidade = 0;
                this.textoAtualizacao();
            }
        }
    },

    acelerar: function () {
        if (!this.ligado) {
            this.start()
        } else {
            this.velocidade = this.velocidade + 10;
            this.textoAtualizacao();
        }
    },

    desacelerar: function () {
        if (!this.ligado) {
            this.textoAlerta()
        } else {
            this.velocidade = this.velocidade - 10;
            this.textoAtualizacao();
        }
    },

    start: function () {
        if (this.ligado) {
            this.textoAlerta()
        } else {
            this.ligado = true;
            this.textoAtualizacao();
        }
    },

    stop: function () {
        if (this.velocidade != 0) {
            while (this.velocidade != 0) {
                this.desacelerar()
            }
            this.desligar()
        } else {
            this.ligado = false
            this.textoAlerta();
        }
    },
}


// Chamar método 
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.stop();
carro.desligar();
