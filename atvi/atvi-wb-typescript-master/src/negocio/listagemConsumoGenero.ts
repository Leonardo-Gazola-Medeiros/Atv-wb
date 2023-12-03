import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemConsumoGenero extends Listagem {
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
        console.log(`\nProdutos e Serviços mais utilizados pelo grupo feminino:`);

        const { usosF, usosM } = this.totalConsumido(this.produtos, this.servicos, this.clientes);

        const sortedUsosF = Object.entries(usosF).sort(([, a], [, b]) => b - a);

        const sortedUsosM = Object.entries(usosM).sort(([, a], [, b]) => b - a);

        for (let i = 0; i < Math.min(10, sortedUsosF.length); i++) {
            const [name, usage] = sortedUsosF[i];
            console.log(`${name}: ${usage} vezes`);
        }

        console.log(`\n`);
        console.log(`\nProdutos e Serviços mais utilizados pelo grupo masculino:`);
        for (let i = 0; i < Math.min(10, sortedUsosM.length); i++) {
            const [name, usage] = sortedUsosM[i];
            console.log(`${name}: ${usage} vezes`);
        }
        console.log(`\n`);
    }


    private totalConsumido(
        produtos: Array<Produto>,
        servicos: Array<Servico>,
        clientes: Array<Cliente>
      ): { usosF: { [key: string]: number }; usosM: { [key: string]: number } } {


        const usosF: { [key: string]: number } = {};
        const usosM: { [key: string]: number } = {};

        produtos.forEach(produto => {
            usosF[`${produto.nome}`] = 0;
            usosM[`${produto.nome}`] = 0;
        });

        servicos.forEach(servico => {
            usosF[`${servico.nome}`] = 0;
            usosM[`${servico.nome}`] = 0;
        });

        clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if(cliente.genero == `F`){
                    if (usosF[`${produto.nome}`] !== undefined) {
                        usosF[`${produto.nome}`]++;
                    }
                } else {
                    if (usosM[`${produto.nome}`] !== undefined) {
                        usosM[`${produto.nome}`]++;
                }}
            });
            cliente.getServicosConsumidos.forEach(servico => {
                if(cliente.genero == `F`){
                    if (usosF[`${servico.nome}`] !== undefined) {
                        usosF[`${servico.nome}`]++;
                    }
                 } else {
                    if (usosM[`${servico.nome}`] !== undefined) {
                        usosM[`${servico.nome}`]++;
                    }}
            });
        });

        return {usosF, usosM};
    }
}