import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";

type Tela = "Clientes" | "Cadastros";

interface RoteadorProps {
  tema: string;
  botoes: Tela[];
}

const Roteador: React.FC = () => {
  const [tela, setTela] = useState<Tela>("Clientes");

  const selecionarView = (novaTela: any, evento: React.MouseEvent) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  const barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="purple lighten-4"
      botoes={['Clientes', 'Cadastros']}
    />
  );

  return (
    <>
      {barraNavegacao}
      {tela === "Clientes" ? (
        <ListaCliente tema="purple lighten-4" />
      ) : (
        <FormularioCadastroCliente tema="purple lighten-4" />
      )}
    </>
  );
};

export default Roteador;
