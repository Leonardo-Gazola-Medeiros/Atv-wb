import { clientes as defaultClientes } from "../data/clientesData";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Listagem from "./listagem";

export default class ListagemGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes masculinos:`);
        this.clientes.forEach(cliente => {
            if (cliente.genero == 'M') {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Genero: ` + cliente.genero)
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`--------------------------------------`)};
            });
        
        console.log(`\n`);
        
        console.log(`\nLista de todos os clientes femininos:`);
        this.clientes.forEach(cliente => {
            if (cliente.genero == 'F') {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Genero: ` + cliente.genero)
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`--------------------------------------`)};
            });
        
        console.log(`\n`);
    }
}