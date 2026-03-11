/*Exercício 1 – Bolo de Pote (Meta de Vendas) 
Pergunta: 

Uma empreendedora vendeu 35 bolos de pote. 
A meta do dia era vender 30 bolos. 
Verifique: 

• Se ela atingiu a meta 
• Se ela superou a meta 

Exiba mensagens usando operadores de comparação.*/

let bolospotevendido = 35;
let metadevendas = 30;

if(bolospotevendido === metadevendas){
    console.log("atingiu a meta!!!");
}else if(bolospotevendido > metadevendas){
    console.log("superou a meta de vendas!!!");
}else{
    console.log("Infelizmente você não atingiu a meta de vendas")
}

/*Exercício 2 – Confeitaria (Frete Grátis) 
Pergunta:

Uma confeitaria oferece frete grátis se: 
• O valor do pedido for maior que R$ 200 
OU 
• O cliente for VIP 

Considere:
• Valor do pedido: R$ 180 
• Cliente VIP: true 

Verifique se o cliente tem direito ao frete grátis utilizando operador lógico. */

let valorpedido = 180;
let clienteVip = true;

if(valorpedido >= 200 || clienteVip === false){
    console.log("Infelizmente você NÃO tem direito a frete gratis.")
}else{
    console.log("Você tem direito a frete gratis!!!")
}

/* Exercício 3 – Ateliê de Costura (Desconto Especial) 
Pergunta: 

Um ateliê oferece 10% de desconto se: 
• O valor do serviço for maior ou igual a R$ 500 
E 
• O cliente for antigo 

Considere: 
• Valor do serviço: R$ 650 
• Cliente antigo: true 
Verifique se o cliente tem direito ao desconto usando operador lógico AND. */
 
let valorServico = 650;
let clienteAntigo = true;
 
if (valorServico >= 500 && clienteAntigo === true) {
    console.log("Cliente tem direito ao desconto de 10%!");
} else {
    console.log("Cliente NÃO tem direito ao desconto.");
}
 
/* Exercício 4 – Psicólogo (Horário Disponível) 
Pergunta:

Um psicólogo atende apenas se: 
• O horário estiver disponível 
E 
• O paciente estiver cadastrado 

Considere: 
• Horário disponível: true 
• Paciente cadastrado: false 
Verifique se a consulta pode ser agendada.*/ 
 
let horarioDisponivel = true;
let pacienteCadastrado = false;
 
if (horarioDisponivel && pacienteCadastrado) {
    console.log("Consulta pode ser agendada.");
} else {
    console.log("Consulta NÃO pode ser agendada.");
}