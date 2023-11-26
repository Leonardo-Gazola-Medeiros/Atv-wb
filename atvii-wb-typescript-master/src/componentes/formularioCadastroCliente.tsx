import { Component } from "react";
import { clientes } from "../data/clientesData";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    
    adicionarCliente() {
        const first_name = document.getElementById("first_name") as HTMLInputElement;
        const nome_social = document.getElementById("last_name") as HTMLInputElement;
        const genero = document.getElementById("genero") as HTMLInputElement;
        const cpf_input = document.getElementById("cpf") as HTMLInputElement;
        const dataEmissao_input = document.getElementById("dataEmissao") as HTMLInputElement;

        const cpf = new CPF(cpf_input.value, new Date(dataEmissao_input.value));
        const cliente = new Cliente(first_name.value, genero.value, nome_social.value, cpf);

        clientes.push(cliente);

        first_name.value = "";
        nome_social.value = "";
        genero.value = "";
        cpf_input.value = "";
        dataEmissao_input.value = "";
    } 

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" required/>
                            <label htmlFor="first_name">nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" required />
                            <label htmlFor="last_name">sobrenome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="genero" type="text" className="validate" placeholder="M ou F" required/>
                            <label htmlFor="genero">genero</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" required />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="dataEmissao" type="date" className="validate" required/>
                            <label htmlFor="dataEmissao">Data de Emissão</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} onClick={this.adicionarCliente} name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
            </div>
        )
    }
}