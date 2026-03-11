/* Sistema de pedidos – Empresa de bolo de pote
Crie um array chamado sabores com pelo menos 4 sabores de bolo de pote. Depois:
• Mostre todos os sabores no console.
• Adicione um novo sabor ao final do array.
• Remova o último sabor.
• Mostre o tamanho total do array após as alterações.*/


//Mostrando sabores no console
const sabores = ["Chocolate", "Morango", "Maracuja", "Baunilha"];
console.log(sabores);

//Adicionando sabor
sabores.push("Red Velvet");
console.log(sabores);

//Removendo o Último sabor
sabores.pop("");
console.log("Red Velvet foi removido, agora temos  " + sabores);

//Mostrando o tamanho total do array
console.log(sabores.length);


/* Controle de clientes – Confeitaria
Crie um array com o nome de 5 clientes que fizeram pedidos na confeitaria. Em seguida:
• Mostre o primeiro e o último cliente do array.
• Verifique se o cliente "Carlos" está na lista usando um método de array.
• Mostre a posição do cliente "Maria".*/

//Lista de Clientes
const clientes = ["João", "Maria", "Rodrigo", "Antonio", "Clarice"];

//Monstrando o primeiro e o último nome do cliente.
console.log(clientes[0]);
console.log(clientes[4]);

//Verificando se o cliente Carlos está no array
const novocliente = clientes.includes("Carlos");
console.log("Temos Cliente Chamado Carlos? " + novocliente);

//Mostrando a posição da Cliente: Maria.
console.log(clientes.indexOf("Maria"));

/* Lista de encomendas – Bolo de pote
Crie dois arrays:
• pedidosManha com 3 números de pedidos.
• pedidosTarde com 3 números de pedidos.
Depois:
• Junte os dois arrays em um terceiro array chamado todosPedidos.
• Mostre o resultado no console. */


//Array de pedidos
const pedidosManha = [1026, 1027, 1028];
const pedidosTarde = [5089, 5090, 5091];

//Juntando os Arrays
const todosPedidos = pedidosManha.concat(pedidosTarde);
console.log(todosPedidos);

/* Controle de serviços – Ateliê de costura
Crie um array chamado servicos contendo: "barra de calça", "ajuste de vestido" e "reforma de 
camisa".
Depois:
• Adicione um novo serviço no início do array.
• Remova o primeiro serviço da lista.
• Mostre o array final no console. */


//array de serviços
const servicos = ["barra de calça", "ajuste de vestido", "reforma de camisa"];
console.log(servicos);

//Adicionando um novo serviço no array
servicos.push("confeção de roupas");
console.log(servicos);

//Removendo o primeiro servido do array
servicos.shift();
console.log("Barra de calça foi Removida, o serviços que temos agora é: " + servicos);

//Array final
console.log(servicos);



/* Agenda de pacientes – Psicólogo
Crie um array chamado pacientes com pelo menos 4 nomes.
Depois:
• Use um for para mostrar todos os pacientes com seus índices no console no formato:
Índice X: Nome do paciente*/

//Array com pacientes
let pacientes = [];
pacientes.push("Frederico")
pacientes.push("Ronaldo")
pacientes.push("Francisco")
pacientes.push("Juliana")


//for para mostrar o Índice dos pacientes
for(let i = 0; i < pacientes.length; i ++){
    console.log("Indice " + i + ": " + pacientes [i]);
}


/* Horários de atendimento – Clínica de psicologia
Crie uma matriz chamada agenda com dois dias e três horários de atendimento em cada dia.
Exemplo de estrutura:
• Dia 1 → 3 horários
• Dia 2 → 3 horários
Depois:
• Use dois for para mostrar todos os horários no formato:
[linha][coluna] = horário */


//Matriz chamada agenda com dois dias e três horários
let agenda = [
    ["08:00", "09:30", "11:00"], // dia 1
    ["08:30", "10:00", "12:00"] // dia 2
];

//Usando for para mostrar no formato [linha][coluna] = horário.
for(let linha = 0; linha < agenda.length; linha++){
    for(let coluna = 0; coluna < agenda[linha].length; coluna++){
        console.log("[" + linha + "][" + coluna + "] = " + agenda[linha] [coluna]);
    }
}


