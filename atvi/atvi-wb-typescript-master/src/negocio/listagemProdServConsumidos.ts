import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdServConsumidos extends Listagem {
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
        console.log(`\nTop 10 Produtos e Serviços mais consumidos:`);

        const usos = this.totalConsumido(this.produtos, this.servicos, this.clientes);

        const sortedUsos = Object.entries(usos).sort(([, a], [, b]) => b - a);

        for (let i = 0; i < Math.min(10, sortedUsos.length); i++) {
            const [name, usage] = sortedUsos[i];
            console.log(`${name}: ${usage} vezes`);
        }

        console.log(`\n`);
    }

    private totalConsumido(produtos: Array<Produto>, servicos: Array<Servico>, clientes: Array<Cliente>): { [key: string]: number } {
        const usos: { [key: string]: number } = {};

        produtos.forEach(produto => {
            usos[produto.nome] = 0;
        });

        servicos.forEach(servico => {
            usos[servico.nome] = 0;
        });

        clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (usos[produto.nome] !== undefined) {
                    usos[produto.nome]++;
                }
            });
            cliente.getServicosConsumidos.forEach(servico => {
                if (usos[servico.nome] !== undefined) {
                    usos[servico.nome]++;
                }
            });
        });

        return usos;
    }
}