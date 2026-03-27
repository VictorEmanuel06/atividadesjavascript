//Exercício 1 - Classe (Psicólogo)
 
/* Crie uma classe chamada Psicologo com:
 
-nome
-valorSessao
 
Crie um método chamado calcularFaturamento(qtdSessoes) que receba a
quantidade de sessões e retorne o faturamento.
 
Depois:
 
1.Crie uma instância.
2.Calcule o faturamento para 30 sessões.
*/
 
class Psicologo {
    constructor(nome, valorSessao) {
        this.nome = nome;
        this.valorSessao = valorSessao;
    }
 
    calcularFaturamento(qntSessoes){
        return this.valorSessao * qntSessoes;
    }
}
 
const psicologo = new Psicologo('Isabelly Fernandes', 120.00);
 
const faturamentoTotal = psicologo.calcularFaturamento(30);
console.log(`O faturamento para 30 sessões é R$ ${faturamentoTotal.toFixed(2)}`);

/*Exercício 2 – Herança (Ateliê de Costura)
Pergunta:
Crie:
• Uma classe Servico com tipo e valor
• Um método descricao()
Depois crie uma classe Costura que herda de Servico e tenha:
• prazoDias
Crie um objeto e mostre todas as informações.*/

class Servico {
    //atributos
    constructor(tipo, valor){
        this.tipo = tipo;
        this.valor = valor;
    }

    //Método
    descricao(){
        return `Serviço escolhido ${this.tipo} valor do serviço ${this.valor}`;
    }
}

class Costura extends Servico {
    //atributos
    constructor(tipo, valor, prazoDias){
        super(tipo, valor)
        this.prazoDias = prazoDias;
    }

    entrega() {
        return this.prazoDias > 1 ? `${this.prazoDias} Dias` : `${this.prazoDias} Dia`;
    }
}

const servico = new Servico("Costura", 19.99);
const costura = new Costura("Barra de Calça", 14.99, 2);

console.log("Serviço");
console.log(servico.descricao());

console.log("\nCostura");
console.log(costura.descricao());
console.log("Entrega: " + costura.entrega());


