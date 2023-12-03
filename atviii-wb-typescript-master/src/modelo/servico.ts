export default class Servico {
    public nome!: string
    public preco!: number

    constructor(nome:string, preco:number){
        this.nome = nome
        this.preco = preco
    }

    public get getNome(): string {
        return this.nome
    }

    public get getPreco(): number {
        return this.preco
    }
}