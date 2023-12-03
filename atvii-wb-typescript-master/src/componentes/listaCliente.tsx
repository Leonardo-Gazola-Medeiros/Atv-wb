/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { clientes } from "../data/clientesData";



type props = {
    tema: string
}


export default class ListaCliente extends Component<props> {

    render() {
        let estilo = `collection-item ${this.props.tema}`
        return (
            <div className="collection">
                {clientes.map((cliente, index) => (
                    <p key={index} className={estilo}>{cliente.nome}</p>
                ))}
            </div>
        )
    }
}