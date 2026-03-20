/*  Exercício 3 – Ateliê
Crie uma função chamada listarMateriais que receba um array de materiais utilizados em um 
ateliê (ex: tintas, pincéis, tecidos).
A função deve:
• Exibir no console a quantidade total de materiais
• Criar um novo array com os nomes dos materiais em letras maiúsculas
• Retornar esse novo array
 Regras:
• Utilize map
• Utilize length
• Use console.log apenas para exibir a quantidade */

function listarMateriais (materiais){

    console.log(materiais.length);

    let novoArray = materiais.map(function(item){
        return item.toUpperCase();
    });

    return novoArray;
}

listarMateriais(["Tintas", "Pincéis", "Tecidos"]);

/* Exercício 4 – Confeitaria
Crie uma função chamada filtrarSaboresDisponiveis que receba:
• Um array com sabores de doces
• Um caractere (letra)
A função deve:
• Retornar apenas os sabores que comecem com a letra informada
• A função não deve exibir nada no console
• Usar função de callback para o filtro
 Regras:
• Utilize filter
• Utilize arrow function como callback
• A função deve retornar um novo array */ 

function filtrarSaboresDisponiveis (sabores, letra){
    let resultado = sabores.filter((sabor) => {
        return sabor.startsWith(letra);
    });
    
    return resultado;
}

filtrarSaboresDisponiveis(
    ["Brigadeiro", "Beijinho", "Cupcake", "Bolo"],
);



/* Exercício 7 – Bolo de Pote
• Crie um JSON de catálogo com três sabores de bolo de pote, onde cada item 
possua: nome do sabor, preço (número), se contém lactose (booleano), e uma lista 
de ingredientes. Em seguida, inclua um campo no topo chamado 
“promocaoAtiva” (booleano) e outro chamado “descontoPercentual” (número). 
Garanta que todos os valores textuais estejam entre aspas e que as chaves sigam 
nomes descritivos em minúsculas. */

let catalogo = `{
    "promocaoAtiva": true,
    "descontoPercentual": 10,
    "catalogo": [
    {
        "nome": "Brigadeiro",
        "preco": 10,
        "contemLactose": true,
        "ingredientes": ["Chocolate", "Leite Condensado"]
    },
        
    {
        "nome": "Maracuja",
        "preco": 12,
        "contemLactose": false,
        "ingredientes": ["Fruta Maracuja", "Mouse de Maracuja"]
    },
    {
        "nome": "Limão",
        "preco": 12,
        "contemLactose": true,
        "ingredientes": ["Fruta Limão", "Mouse de Limão"]    
    }
  ]
}`;


/*Exercício 8 – Confeitaria
• Crie um JSON de pedido online para uma confeitaria contendo: identificador do 
pedido, data do pedido (ISO), cliente (nome e e-mail), itens (lista de objetos com 
produto, quantidade e observações), endereço de entrega (rua, número, bairro, 
cidade, CEP), forma de pagamento (ex.: “cartão”, “pix”) e um campo 
“totalCalculado” (número). Certifique-se de que todos os objetos e arrays
estejam bem aninhados e que os tipos sejam coerentes */


let pedidoOnline = `{
    "identificadorDePedido": 002,
    "dataDoPedido": 20/03/2026,
    "cliente: 
}`