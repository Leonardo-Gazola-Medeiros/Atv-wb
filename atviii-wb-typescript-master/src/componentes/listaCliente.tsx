import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { clientes } from "../data/clientesData";

type Props = {
    tema: string;
};

const ListaCliente: React.FC<Props> = ({ tema }) => {
    const estilo = `collection-item ${tema}`;

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
