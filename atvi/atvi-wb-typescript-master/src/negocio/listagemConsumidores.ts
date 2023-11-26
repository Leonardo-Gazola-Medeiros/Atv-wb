import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemConsumidores extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nTop 5 clientes que mais gastaram:`);

        
        const maioresConsumidores = this.clientes.slice().sort((a, b) => this.totalGasto(b) - this.totalGasto(a));

        
        for (let i = 0; i < Math.min(5, maioresConsumidores.length); i++) {
            const cliente = maioresConsumidores[i];
            const totalSpending = this.totalGasto(cliente);

            console.log(`Rank ${i + 1}: ${cliente.nome}`);
            console.log(`Total Consumido: R$${totalSpending.toFixed(2)}`);
            console.log('------------------------');
        }

        console.log(`\n`);
    }

    private totalGasto(cliente: Cliente): number {
        let total: number = 0;

        cliente.getProdutosConsumidos.forEach(produto => {
            total += produto.preco;
        });

        cliente.getServicosConsumidos.forEach(servico => {
            total += servico.preco;
        });

        return total;
    }
}