/* Cadastro de cliente – Empresa de bolo de pote
Crie um objeto chamado cliente contendo as propriedades:
• nome
• telefone
• pedidoFavorito
Depois:
• Mostre o nome do cliente no console.
• Adicione uma nova propriedade chamada cidade.
• Remova a propriedade telefone.
• Mostre o objeto final no console */


//Criando um objeto chamado Cliente com as propriedades
const objetoCliente = {
    nome: "Carlos",
    telefone: 11955482322,
    pedidoFavorito: "Bolo de Chocolate",
};

//Mostrando apenas o nome do cliente
console.log(objetoCliente.nome);

//Adicionando uma nova propriedade chamda cidade
objetoCliente.cidade = "Bragança Paulista";
console.log(objetoCliente.cidade);

//Removendo uma propriedade chamada telefone
delete objetoCliente.telefone;

//Mostrando o objeto final no console
console.log(objetoCliente);


/* Cadastro de produto – Confeitaria
Crie dois objetos:
• bolo com as propriedades sabor e preco.
• ingredientes com as propriedades massa e recheio.
Depois:
• Crie um objeto chamado produtoFinal.
• Use Object.assign() para juntar as propriedades dos dois objetos no produtoFinal.
• Mostre o objeto no console. */

const objetobolo = {
    sabor: "Red Velvet",
    preco: 12.99,
};

const objetoingredientes = {
    massa: "Veludo Vermelho",
    recheio: "Morango",
};

const objetoprodutoFinal = {};

Object.assign(objetoprodutoFinal, objetobolo, objetoingredientes);
console.log(objetoprodutoFinal);



/* Serviço do ateliê de costura
Crie um objeto chamado servico com as propriedades:
• tipo
• preco
Depois:
• Altere o valor do preco.
• Adicione uma propriedade chamada prazoEntrega.
• Mostre o objeto atualizado no console.
*/

//Objeto servico com as propriedades: tipo, preco
const objetoservico = {
    tipo: "Barra de Calça",
    preco: 20.00,
};

//Alterando o valor de preco
objetoservico.preco += 5;

//Adicionando uma nova propriedade
objetoservico.prazodeentrega = "1 dia";

//Mostrando o Objeto atualizado
console.log(objetoservico);


/* Ficha de paciente – Psicólogo
Crie um objeto chamado paciente com as propriedades:
• nome
• idade
• problema
Depois:
• Use Object.keys() para mostrar todas as propriedades do objeto.
• Mostre o resultado no console. */

//Objeto chamado paciente
const paciente = {
    nome: "Pedro",
    idade: 28,
    problema: "Ansiedade",

};

//Mostrando no console apenas as propriedades
const propriedade = Object.keys(paciente);
console.log(propriedade);



/* Cadastro de costureira – Ateliê de costura
Crie um objeto chamado costureira com as propriedades:
• nome
• experiencia
• especialidade
Depois:
• Aumente o valor de experiencia em 1 usando operador de adição (+=).
• Mostre o objeto atualizado no console. */


//Objeto Chamado costureira
const costureira = {
    nome: "Eliete",
    experiencia: 15,
    especialidade: "Barra de Calça",
};


//Aumentou o valor de experiencia e mostrou o objeto no console
costureira.experiencia += 1;
console.log(costureira);


/* Informações do terapeuta – Clínica de psicologia
Crie um objeto chamado terapeuta com as propriedades:
• nome
• especialidade
• cidade
Depois:
• Use Object.values() para desestruturar os valores do objeto em três variáveis.
• Mostre os valores no console */


// Objeto chamado terapeuta
const terapeuta = {
    nome: "Romulo ",
    Especialidade: "Ansiedade, Autoestima,  conflitos emocionais ",
    cidade: "São Paulo ",
}

//Desestruturando os valoes do objeto
const [nome, especialidade, cidade]= Object.values(terapeuta);
console.log(nome, especialidade, cidade);


const nomes = "victor";