"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    Object.defineProperty(Empresa.prototype, "getClientes", {
        get: function () {
            return this.clientes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getProdutos", {
        get: function () {
            return this.produtos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getServicos", {
        get: function () {
            return this.servicos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "setCliente", {
        set: function (cliente) {
            this.clientes.push(cliente);
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.setDefaultClientes = function (clientes) {
        console.log("Cadastrando clientes");
        this.clientes = clientes;
    };
    Object.defineProperty(Empresa.prototype, "setProduto", {
        set: function (produto) {
            this.produtos.push(produto);
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.setDefaultProdutos = function (produtos) {
        console.log("Cadastrando produtos");
        this.produtos = produtos;
    };
    Object.defineProperty(Empresa.prototype, "setServico", {
        set: function (servico) {
            this.servicos.push(servico);
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.setDefaultServicos = function (servicos) {
        console.log("Cadastrando servicos");
        this.servicos = servicos;
    };
    return Empresa;
}());
exports.default = Empresa;
