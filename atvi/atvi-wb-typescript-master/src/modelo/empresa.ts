import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";

export default class Empresa {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }

    public get getClientes() {
        return this.clientes;
    }

    public get getProdutos() {
        return this.produtos;
    }

    public get getServicos() {
        return this.servicos;
    }

    public set setCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    public setDefaultClientes(clientes: Array<Cliente>) {
        console.log(`Cadastrando clientes`);
        this.clientes = clientes;
    }

    public set setProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    public setDefaultProdutos(produtos: Array<Produto>) {
        console.log(`Cadastrando produtos`);
        this.produtos = produtos;
    }

    public set setServico(servico: Servico) {
        this.servicos.push(servico);
    }

    public setDefaultServicos(servicos: Array<Servico>) {
        console.log(`Cadastrando servicos`);
        this.servicos = servicos;
    }
}
