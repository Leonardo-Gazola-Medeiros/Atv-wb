import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string;
};

type Cliente = {
    id: number;
    nome: string;
    sobrenome: string;
    genero: string;
    cpf: string;
    data_emissao: string; // ou o tipo correto para a data
};

const FormularioCadastroCliente: React.FC<Props> = ({ tema }) => {
    const [cliente, setCliente] = useState({
        id: "",
        nome: "",
        sobrenome: "",
        genero: "",
        cpf: "",
        dataEmissao: "",
    });

    const [clientes, setClientes] = useState<Cliente[]>([]);

    const fetchClientes = () => {
        fetch("http://localhost:3001/clientes")
          .then((response) => response.json())
          .then((data) => setClientes(data))
          .catch((error) => console.error("Erro ao buscar clientes: ", error));
      };

    useEffect(() => {
    fetchClientes();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        fetch("http://localhost:3001/clientes/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cliente),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("Cadastro realizado com sucesso!");
        })
        .catch((error) => console.error("Erro ao cadastrar cliente: ", error));
    };

    let estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="row">
            <div className="row">
                <div className="input-field col s6">
                    <input
                        id="first_name"
                        type="text"
                        className="validate"
                        name="nome"
                        value={cliente.nome}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="first_name">Nome</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="last_name"
                        type="text"
                        className="validate"
                        name="sobrenome"
                        value={cliente.sobrenome}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="last_name">Sobrenome</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input
                        id="genero"
                        type="text"
                        className="validate"
                        placeholder="M ou F"
                        name="genero"
                        value={cliente.genero}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="genero">Gênero</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="cpf"
                        type="text"
                        className="validate"
                        name="cpf"
                        value={cliente.cpf}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="cpf">CPF</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="dataEmissao"
                        type="date"
                        className="validate"
                        name="dataEmissao"
                        value={cliente.dataEmissao}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="dataEmissao">Data de Emissão</label>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button className={estiloBotao} onClick={handleSubmit} name="action">
                        Submit
                        <i className="material-icons right" onClick={handleSubmit}>send</i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormularioCadastroCliente;
