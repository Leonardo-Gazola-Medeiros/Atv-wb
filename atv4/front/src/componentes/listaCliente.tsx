import React, { useEffect, useState } from "react";
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

const ListaCliente: React.FC<Props> = ({ tema }) => {
    const estilo = `collection-item ${tema}`;
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3001/clientes/`)
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error("Erro ao buscar informações de usuário: ", error));
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
                alert("Exclusão bem sucedida!");
            })
            .catch((error) => console.error("Erro ao excluir cliente: ", error));
    };

    return (
        <div className="collection">
            {clientes.map((cliente, index) => (
                <p key={index} className={estilo}>
                    {cliente.nome} <button onClick={() => excluirCliente(cliente.id)}>Excluir</button>
                </p>
            ))}
        </div>
    );
};

export default ListaCliente;
