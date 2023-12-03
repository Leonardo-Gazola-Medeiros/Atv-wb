import { clientes } from "../data/clientesData";
import { produtos } from "../data/produtosData";
import { servicos } from "../data/servicoData";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemConsumidores from "../negocio/listagemConsumidores";
import ListagemConsumoGenero from "../negocio/listagemConsumoGenero";
import ListagemGenero from "../negocio/listagemGenero";
import ListagemPaoDuros from "../negocio/listagemPaoDuros";
import ListagemProdServConsumidos from "../negocio/listagemProdServConsumidos";
import ListagemProdutos from "../negocio/listagemProdutos";


clientes;
produtos;
servicos;


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true


empresa.setDefaultProdutos(produtos);
empresa.setDefaultServicos(servicos);
empresa.setDefaultClientes(clientes);

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar Serviço`)
    console.log(`4 - Cadastrar Produto`)
    console.log(`5 - Listar Clientes por Genero`);
    console.log(`6 - Listar Produtos e Serviços mais utilizados`);
    console.log(`7 - Listar Produtos e Serviços mais utilizados por Genero`);
    console.log(`8 - Listar clientes que menos consumiram`);
    console.log(`9 - Listar clientes que mais consumiram em valor`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cadastroServ = new CadastroServico(empresa.getServicos)
            cadastroServ.cadastrar()
            break;
        case 4:
            let cadastroProd = new CadastroProduto(empresa.getProdutos)
            cadastroProd.cadastrar()
            break;
        case 5:
            let listagemGenero = new ListagemGenero(empresa.getClientes)
            listagemGenero.listar()
            break;
        case 6:
            let listagemProdServConsumidos = new ListagemProdServConsumidos(empresa.getProdutos, empresa.getServicos, empresa.getClientes)
            listagemProdServConsumidos.listar()
            break;
        case 7:
            let listagemConsumoGenero = new ListagemConsumoGenero(empresa.getProdutos, empresa.getServicos, empresa.getClientes)
            listagemConsumoGenero.listar()
            break;
        case 8:
            let listagemPaoDuros = new ListagemPaoDuros(empresa.getProdutos, empresa.getServicos, empresa.getClientes)
            listagemPaoDuros.listar()
            break;
        case 9:
            let listagemConsumidores = new ListagemConsumidores(empresa.getClientes)
            listagemConsumidores.listar()
            break;
        case 99:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}