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
var ListagemPaoDuros = /** @class */ (function (_super) {
    __extends(ListagemPaoDuros, _super);
    function ListagemPaoDuros(produtos, servicos, clientes) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.servicos = servicos;
        _this.clientes = clientes;
        return _this;
    }
    ListagemPaoDuros.prototype.listar = function () {
        console.log("\nTop 10 Clientes P\u00E3o Duros:");
        var usos = this.totalConsumido(this.produtos, this.servicos, this.clientes);
        var sortedUsos = Object.entries(usos).sort(function (_a, _b) {
            var a = _a[1];
            var b = _b[1];
            return a - b;
        });
        for (var i = 0; i < Math.min(10, sortedUsos.length); i++) {
            var _a = sortedUsos[i], name_1 = _a[0], compras = _a[1];
            console.log("".concat(name_1, ": ").concat(compras, " vezes"));
        }
        console.log("\n");
    };
    ListagemPaoDuros.prototype.totalConsumido = function (produtos, servicos, clientes) {
        var usos = {};
        clientes.forEach(function (cliente) {
            usos["".concat(cliente.getCpf.getValor, " / ").concat(cliente.nome)] = 0;
            cliente.getProdutosConsumidos.forEach(function (produto) {
                if (usos["".concat(cliente.getCpf.getValor, " / ").concat(cliente.nome)] !== undefined) {
                    usos["".concat(cliente.getCpf.getValor, " / ").concat(cliente.nome)]++;
                }
            });
            cliente.getServicosConsumidos.forEach(function (servico) {
                if (usos["".concat(cliente.getCpf.getValor, " / ").concat(cliente.nome)] !== undefined) {
                    usos["".concat(cliente.getCpf.getValor, " / ").concat(cliente.nome)]++;
                }
            });
        });
        return usos;
    };
    return ListagemPaoDuros;
}(listagem_1.default));
exports.default = ListagemPaoDuros;
