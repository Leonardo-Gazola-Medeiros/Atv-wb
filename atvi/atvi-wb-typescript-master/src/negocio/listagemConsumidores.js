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
var ListagemConsumidores = /** @class */ (function (_super) {
    __extends(ListagemConsumidores, _super);
    function ListagemConsumidores(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemConsumidores.prototype.listar = function () {
        var _this = this;
        console.log("\nTop 5 clientes que mais gastaram:");
        var maioresConsumidores = this.clientes.slice().sort(function (a, b) { return _this.totalGasto(b) - _this.totalGasto(a); });
        for (var i = 0; i < Math.min(5, maioresConsumidores.length); i++) {
            var cliente = maioresConsumidores[i];
            var totalSpending = this.totalGasto(cliente);
            console.log("Rank ".concat(i + 1, ": ").concat(cliente.nome));
            console.log("Total Consumido: R$".concat(totalSpending.toFixed(2)));
            console.log('------------------------');
        }
        console.log("\n");
    };
    ListagemConsumidores.prototype.totalGasto = function (cliente) {
        var total = 0;
        cliente.getProdutosConsumidos.forEach(function (produto) {
            total += produto.preco;
        });
        cliente.getServicosConsumidos.forEach(function (servico) {
            total += servico.preco;
        });
        return total;
    };
    return ListagemConsumidores;
}(listagem_1.default));
exports.default = ListagemConsumidores;
