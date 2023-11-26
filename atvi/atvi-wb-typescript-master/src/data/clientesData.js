"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes = void 0;
var cliente_1 = require("../modelo/cliente");
var cpf_1 = require("../modelo/cpf");
var produtosData_1 = require("./produtosData");
var servicoData_1 = require("./servicoData");
// Function to generate random date within a given range
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
// Function to generate random CPF
function generateRandomCPF() {
    var randomCPFValue = Math.floor(10000000000 + Math.random() * 90000000000).toString();
    var randomDateEmissao = randomDate(new Date(2000, 0, 1), new Date());
    return new cpf_1.default(randomCPFValue, randomDateEmissao);
}
function generateRandomCliente(produtos, servicos) {
    var nomes = ['Ana', 'Breno', 'Clara', 'Diego', 'Eduarda',
        'Felipe', 'Gabriela', 'Henrique', 'Isabela', 'João',
        'Karla', 'Lucas', 'Mariana', 'Nathan', 'Olívia',
        'Pedro', 'Quiteria', 'Rafael', 'Sofia', 'Thiago',
        'Ursula', 'Vinícius', 'Wanessa', 'Xavier', 'Yasmin',
        'Zé', 'Alessandra', 'Bruno', 'Camila', 'Davi',
        'Elaine', 'Fernando', 'Giovanna', 'Hugo', 'Ingrid',
        'Jorge', 'Kátia', 'Leandro', 'Larissa', 'Miguel',
        'Natália', 'Oscar', 'Patrícia', 'Quincy', 'Renata',
        'Sérgio', 'Tatiane', 'Ulisses', 'Viviane', 'Walter'];
    var generos = ['F', 'M'];
    var nome = nomes[Math.floor(Math.random() * nomes.length)];
    var genero = generos[Math.floor(Math.random() * generos.length)];
    var nomeSocial = "".concat(nome); // Adding a common last name for simplicity
    var cpf = generateRandomCPF();
    // Generate random number of products consumed (up to 5)
    var numProdutosConsumidos = Math.floor(Math.random() * 44) + 1;
    var produtosConsumidos = Array.from({ length: numProdutosConsumidos }, function () { return produtos[Math.floor(Math.random() * produtos.length)]; });
    // Generate random number of services consumed (up to 3)
    var numServicosConsumidos = Math.floor(Math.random() * 22) + 1;
    var servicosConsumidos = Array.from({ length: numServicosConsumidos }, function () { return servicos[Math.floor(Math.random() * servicos.length)]; });
    var cliente = new cliente_1.default(nome, genero, nomeSocial, cpf);
    cliente.setDefaultProdutos(produtosConsumidos);
    cliente.setDefaultServicos(servicosConsumidos);
    return cliente;
}
// Assuming you have existing lists of produtos and servicos
// Create a list of 30 random Cliente instances with products and services
exports.clientes = Array.from({ length: 30 }, function () { return generateRandomCliente(produtosData_1.produtos, servicoData_1.servicos); });
