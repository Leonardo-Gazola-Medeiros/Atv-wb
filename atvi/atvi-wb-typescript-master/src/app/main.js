"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientesData_1 = require("../data/clientesData");
var produtosData_1 = require("../data/produtosData");
var servicoData_1 = require("../data/servicoData");
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var cadastroCliente_1 = require("../negocio/cadastroCliente");
var cadastroProduto_1 = require("../negocio/cadastroProduto");
var cadastroServico_1 = require("../negocio/cadastroServico");
var listagemClientes_1 = require("../negocio/listagemClientes");
var listagemConsumidores_1 = require("../negocio/listagemConsumidores");
var listagemConsumoGenero_1 = require("../negocio/listagemConsumoGenero");
var listagemGenero_1 = require("../negocio/listagemGenero");
var listagemPaoDuros_1 = require("../negocio/listagemPaoDuros");
var listagemProdServConsumidos_1 = require("../negocio/listagemProdServConsumidos");
var listagemProdutos_1 = require("../negocio/listagemProdutos");
clientesData_1.clientes;
produtosData_1.produtos;
servicoData_1.servicos;
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
empresa.setDefaultProdutos(produtosData_1.produtos);
empresa.setDefaultServicos(servicoData_1.servicos);
empresa.setDefaultClientes(clientesData_1.clientes);
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar Servi\u00E7o");
    console.log("4 - Cadastrar Produto");
    console.log("5 - Listar Clientes por Genero");
    console.log("6 - Listar Produtos e Servi\u00E7os mais utilizados");
    console.log("7 - Listar Produtos e Servi\u00E7os mais utilizados por Genero");
    console.log("8 - Listar clientes que menos consumiram");
    console.log("9 - Listar clientes que mais consumiram em valor");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cadastroServ = new cadastroServico_1.default(empresa.getServicos);
            cadastroServ.cadastrar();
            break;
        case 4:
            var cadastroProd = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProd.cadastrar();
            break;
        case 5:
            var listagemGenero = new listagemGenero_1.default(empresa.getClientes);
            listagemGenero.listar();
            break;
        case 6:
            var listagemProdServConsumidos = new listagemProdServConsumidos_1.default(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            listagemProdServConsumidos.listar();
            break;
        case 7:
            var listagemConsumoGenero = new listagemConsumoGenero_1.default(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            listagemConsumoGenero.listar();
            break;
        case 8:
            var listagemPaoDuros = new listagemPaoDuros_1.default(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            listagemPaoDuros.listar();
            break;
        case 9:
            var listagemConsumidores = new listagemConsumidores_1.default(empresa.getClientes);
            listagemConsumidores.listar();
            break;
        case 99:
            var listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
