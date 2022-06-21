// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}`;
        },
        altura: altura,
        peso: peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Moisés', 'Júnior', 1.7, 100);
const p2 = criaPessoa('João', 'Gabriel', 1.6, 90);
const p3 = criaPessoa('Maria', 'Clara', 1.5, 47);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);