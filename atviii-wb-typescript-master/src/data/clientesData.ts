import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import {produtos} from "./produtosData";
import {servicos} from "./servicoData";





// Function to generate random date within a given range
function randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate random CPF
    function generateRandomCPF(): CPF {
        const randomCPFValue = Math.floor(10000000000 + Math.random() * 90000000000).toString();
        const randomDateEmissao = randomDate(new Date(2000, 0, 1), new Date());
        return new CPF(randomCPFValue, randomDateEmissao);
    }

    function generateRandomCliente(produtos: Produto[], servicos: Servico[]): Cliente {
        const nomes = ['Ana', 'Breno', 'Clara', 'Diego', 'Eduarda',
        'Felipe', 'Gabriela', 'Henrique', 'Isabela', 'João',
        'Karla', 'Lucas', 'Mariana', 'Nathan', 'Olívia',
        'Pedro', 'Quiteria', 'Rafael', 'Sofia', 'Thiago',
        'Ursula', 'Vinícius', 'Wanessa', 'Xavier', 'Yasmin',
        'Zé', 'Alessandra', 'Bruno', 'Camila', 'Davi',
        'Elaine', 'Fernando', 'Giovanna', 'Hugo', 'Ingrid',
        'Jorge', 'Kátia', 'Leandro', 'Larissa', 'Miguel',
        'Natália', 'Oscar', 'Patrícia', 'Quincy', 'Renata',
        'Sérgio', 'Tatiane', 'Ulisses', 'Viviane', 'Walter'];
        const generos = ['F', 'M'];
    
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const genero = generos[Math.floor(Math.random() * generos.length)];
        const nomeSocial = `${nome}`; // Adding a common last name for simplicity
        const cpf = generateRandomCPF();
    
        // Generate random number of products consumed (up to 5)
        const numProdutosConsumidos = Math.floor(Math.random() * 44) + 1;
        const produtosConsumidos = Array.from({ length: numProdutosConsumidos }, () => produtos[Math.floor(Math.random() * produtos.length)]);
    
        // Generate random number of services consumed (up to 3)
        const numServicosConsumidos = Math.floor(Math.random() * 22) + 1;
        const servicosConsumidos = Array.from({ length: numServicosConsumidos }, () => servicos[Math.floor(Math.random() * servicos.length)]);
        
        const cliente = new Cliente(nome, genero, nomeSocial, cpf);
        cliente.setDefaultProdutos(produtosConsumidos);
        cliente.setDefaultServicos(servicosConsumidos);
        return cliente
    }
    
    // Assuming you have existing lists of produtos and servicos
    // Create a list of 30 random Cliente instances with products and services
    export const clientes: Cliente[] = Array.from({ length: 30 }, () => generateRandomCliente(produtos, servicos));
