"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = require("./listagem");
var ListagemProdServConsumidos = /** @class */ (function (_super) {
    __extends(ListagemProdServConsumidos, _super);
    function ListagemProdServConsumidos(produtos, servicos, clientes) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.servicos = servicos;
        _this.clientes = clientes;
        return _this;
    }
    ListagemProdServConsumidos.prototype.listar = function () {
        console.log("\nTop 10 Produtos e Servi\u00E7os mais consumidos:");
        var usos = this.totalConsumido(this.produtos, this.servicos, this.clientes);
        var sortedUsos = Object.entries(usos).sort(function (_a, _b) {
            var a = _a[1];
            var b = _b[1];
            return b - a;
        });
        for (var i = 0; i < Math.min(10, sortedUsos.length); i++) {
            var _a = sortedUsos[i], name_1 = _a[0], usage = _a[1];
            console.log("".concat(name_1, ": ").concat(usage, " vezes"));
        }
        console.log("\n");
    };
    ListagemProdServConsumidos.prototype.totalConsumido = function (produtos, servicos, clientes) {
        var usos = {};
        produtos.forEach(function (produto) {
            usos[produto.nome] = 0;
        });
        servicos.forEach(function (servico) {
            usos[servico.nome] = 0;
        });
        clientes.forEach(function (cliente) {
            cliente.getProdutosConsumidos.forEach(function (produto) {
                if (usos[produto.nome] !== undefined) {
                    usos[produto.nome]++;
                }
            });
            cliente.getServicosConsumidos.forEach(function (servico) {
                if (usos[servico.nome] !== undefined) {
                    usos[servico.nome]++;
                }
            });
        });
        return usos;
    };
    return ListagemProdServConsumidos;
}(listagem_1.default));
exports.default = ListagemProdServConsumidos;
