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
var ListagemConsumoGenero = /** @class */ (function (_super) {
    __extends(ListagemConsumoGenero, _super);
    function ListagemConsumoGenero(produtos, servicos, clientes) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.servicos = servicos;
        _this.clientes = clientes;
        return _this;
    }
    ListagemConsumoGenero.prototype.listar = function () {
        console.log("\nProdutos e Servi\u00E7os mais utilizados pelo grupo feminino:");
        var _a = this.totalConsumido(this.produtos, this.servicos, this.clientes), usosF = _a.usosF, usosM = _a.usosM;
        var sortedUsosF = Object.entries(usosF).sort(function (_a, _b) {
            var a = _a[1];
            var b = _b[1];
            return b - a;
        });
        var sortedUsosM = Object.entries(usosM).sort(function (_a, _b) {
            var a = _a[1];
            var b = _b[1];
            return b - a;
        });
        for (var i = 0; i < Math.min(10, sortedUsosF.length); i++) {
            var _b = sortedUsosF[i], name_1 = _b[0], usage = _b[1];
            console.log("".concat(name_1, ": ").concat(usage, " vezes"));
        }
        console.log("\n");
        console.log("\nProdutos e Servi\u00E7os mais utilizados pelo grupo masculino:");
        for (var i = 0; i < Math.min(10, sortedUsosM.length); i++) {
            var _c = sortedUsosM[i], name_2 = _c[0], usage = _c[1];
            console.log("".concat(name_2, ": ").concat(usage, " vezes"));
        }
        console.log("\n");
    };
    ListagemConsumoGenero.prototype.totalConsumido = function (produtos, servicos, clientes) {
        var usosF = {};
        var usosM = {};
        produtos.forEach(function (produto) {
            usosF["".concat(produto.nome)] = 0;
            usosM["".concat(produto.nome)] = 0;
        });
        servicos.forEach(function (servico) {
            usosF["".concat(servico.nome)] = 0;
            usosM["".concat(servico.nome)] = 0;
        });
        clientes.forEach(function (cliente) {
            cliente.getProdutosConsumidos.forEach(function (produto) {
                if (cliente.genero == "F") {
                    if (usosF["".concat(produto.nome)] !== undefined) {
                        usosF["".concat(produto.nome)]++;
                    }
                }
                else {
                    if (usosM["".concat(produto.nome)] !== undefined) {
                        usosM["".concat(produto.nome)]++;
                    }
                }
            });
            cliente.getServicosConsumidos.forEach(function (servico) {
                if (cliente.genero == "F") {
                    if (usosF["".concat(servico.nome)] !== undefined) {
                        usosF["".concat(servico.nome)]++;
                    }
                }
                else {
                    if (usosM["".concat(servico.nome)] !== undefined) {
                        usosM["".concat(servico.nome)]++;
                    }
                }
            });
        });
        return { usosF: usosF, usosM: usosM };
    };
    return ListagemConsumoGenero;
}(listagem_1.default));
exports.default = ListagemConsumoGenero;
