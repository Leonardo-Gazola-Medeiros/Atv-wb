import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { getValue } from "@testing-library/user-event/dist/utils";

type Props = {
    tema: string;
};

type Cliente = {
    id: number;
    nome: string;
    sobrenome: string;
    genero: string;
    cpf: string;
    data_emissao: string;
};

const ListaCliente: React.FC<Props> = ({ tema }) => {
    const estilo = `collection-item ${tema}`;
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [clienteEditado, setClienteEditado] = useState<Cliente>({
        id: 0,
        nome: "",
        sobrenome: "",
        genero: "",
        cpf: "",
        data_emissao: "",
    });

    const fetchClientes = () => {
        fetch(`http://localhost:3001/clientes/`)
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error("Erro ao buscar informações de usuário: ", error));
    };

    useEffect(() => {
        fetchClientes();
    }, []); // Adicionando dependência vazia

    const excluirCliente = (id: number) => {
        fetch(`http://localhost:3001/clientes/excluir/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Exclusão bem-sucedida!");
                fetchClientes();
            })
            .catch((error) => console.error("Erro ao excluir cliente: ", error));
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setClienteEditado((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };

    const atualizarCliente = (id: number, nome:string, sobrenome:string, cpf:string, genero:string, data_emissao:string) => {
    clienteEditado.id = id;

    if(clienteEditado.nome == ""){
        clienteEditado.nome = nome;} 
    if(clienteEditado.sobrenome == ""){
        clienteEditado.sobrenome = sobrenome;} 
    if(clienteEditado.cpf == ""){
        clienteEditado.cpf = cpf;} 
    if(clienteEditado.genero == ""){
        clienteEditado.genero = genero;}  
    if(clienteEditado.data_emissao == ""){
        clienteEditado.data_emissao = data_emissao;}
    
    fetch(`http://localhost:3001/clientes/atualizar/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(clienteEditado),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert("Atualização bem-sucedida!");
            fetchClientes();
        })
        .catch((error) => console.error("Erro ao atualizar cliente: ", error));
};

    return (
        <div className="collection">
            {clientes.map((cliente, index) => (
                <div key={index} className={estilo}>
                    <input
                        type="hidden"
                        defaultValue={cliente.id}
                        name="nome"
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        defaultValue={cliente.nome}
                        name="nome"
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        defaultValue={cliente.genero}
                        name="genero"
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        defaultValue={cliente.cpf}
                        name="cpf"
                        onChange={handleInputChange}
                    />
                    <input
                        type="date"
                        value={cliente.data_emissao}
                        name="data_emissao"
                        onChange={handleInputChange}
                    />
                    <button onClick={() => excluirCliente(cliente.id)}>Excluir</button>
                    <button onClick={() => atualizarCliente(cliente.id, cliente.nome,cliente.sobrenome,cliente.cpf,cliente.genero, cliente.data_emissao)}>Atualizar</button>
                </div>
            ))}
        </div>
    );
};

export default ListaCliente;
