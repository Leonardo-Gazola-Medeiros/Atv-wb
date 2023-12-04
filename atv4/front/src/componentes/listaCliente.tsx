import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string;
};

type Cliente = {
    nome: string;
    sobrenome: string;
    genero: string;
    cpf: string;
    data_emissao: string; // ou o tipo correto para a data
};

const ListaCliente: React.FC<Props> = ({ tema }) => {
    const estilo = `collection-item ${tema}`;
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const posicaoID = window.location.href.indexOf("id=");
    const id = window.location.href.substring(posicaoID + 3);

    useEffect(() => {
        fetch(`http://localhost:3001/clientes/`)
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error("Erro ao buscar informações de usuário: ", error));
    }, []); // Adicionando dependência vazia

    return (
        <div className="collection">
            {clientes.map((cliente, index) => (
                <p key={index} className={estilo}>
                    {cliente.nome}
                </p>
            ))}
        </div>
    );
};

export default ListaCliente;