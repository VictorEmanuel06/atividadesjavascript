// Exercíco 1  Bolo de Pote (Cálculo de Lucro)

// definindo valores
let precoVenda = 12.00; 
let custoUnitario = 5.50;
let quantidadeVendida = 30;

// cálculo
let lucroUnitario = precoVenda - custoUnitario;
let lucroTotal = lucroUnitario * quantidadeVendida;
const lucroTotalFinal = lucroTotal;

// Resultados
console.log(`Preço de venda: R$ ${precoVenda.toFixed(2)}`)
console.log(`Custo Unitário: R$ ${custoUnitario.toFixed(2)}`)
console.log(`Lucro por unidade: R$ ${lucroUnitario.toFixed(2)}`)
console.log(`Quantidade vendida: R$ ${quantidadeVendida} unidades`)
console.log(`Lucro total: R$ ${lucroTotal.toFixed(2)}`)

// Exercício 2 Confeitaria (Desconto)

// definindo valores
let valorBolo = 150;
let desconto = 0.10;

// cálculo
let valorDesconto = valorBolo * desconto; //10% 
let valorFinal = valorBolo - (desconto * valorBolo);

console.log(`O valor do desconto é R$ ${valorDesconto}`);
console.log(`O valor final do bolo é R$ ${valorFinal}`);


/*Exercício 3 – Estilista (Comissão)

Pergunta:

Uma estilista vendeu um vestido por R$ 800,00. 
Ela recebe 15% de comissão sobre a venda. 
Calcule o valor da comissão e exiba o resultado usando interpolação. */

let valorVenda = 800;
let comissao = valorVenda * 0.15;

console.log(`O valor da comissão é R$ ${comissao.toFixed(2)}`);


/*Exercício 4 – Psicólogo (Faturamento Mensal)

Pergunta:

Um psicólogo cobra R$ 120,00 por sessão.
No mês, ele realizou 40 sessões.
Calcule o faturamento mensal e exiba o resultado por concatenação. */

let valorSessao = 120;
let quantidadeSessoes = 40;

let faturamento = valorSessao * quantidadeSessoes;

console.log("\nO faturamento mensal é R$ " + faturamento.toFixed(2));