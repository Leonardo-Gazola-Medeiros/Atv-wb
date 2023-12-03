import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPaoDuros extends Listagem {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private clientes: Array<Cliente>;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>, clientes: Array<Cliente>) {
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nTop 10 Clientes Pão Duros:`);

        const usos = this.totalConsumido(this.produtos, this.servicos, this.clientes);


        const sortedUsos = Object.entries(usos).sort(([, a], [, b]) => a - b);


        for (let i = 0; i < Math.min(10, sortedUsos.length); i++) {
            const [name, compras] = sortedUsos[i];
            console.log(`${name}: ${compras} vezes`);
        }

        console.log(`\n`);
    }

    private totalConsumido(produtos: Array<Produto>, servicos: Array<Servico>, clientes: Array<Cliente>): { [key: string]: number } {
        const usos: { [key: string]: number } = {};

        clientes.forEach(cliente => {
            usos[`${cliente.getCpf.getValor} / ${cliente.nome}`] = 0;
            cliente.getProdutosConsumidos.forEach(produto => {
                if (usos[`${cliente.getCpf.getValor} / ${cliente.nome}`] !== undefined) {
                    usos[`${cliente.getCpf.getValor} / ${cliente.nome}`]++;
                }
            });
            cliente.getServicosConsumidos.forEach(servico => {
                if (usos[`${cliente.getCpf.getValor} / ${cliente.nome}`] !== undefined) {
                    usos[`${cliente.getCpf.getValor} / ${cliente.nome}`]++;
                }
            });
        });

        return usos;
    }
}