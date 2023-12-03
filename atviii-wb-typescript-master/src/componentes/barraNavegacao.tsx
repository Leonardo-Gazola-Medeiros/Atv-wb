import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
    tema: string;
    botoes: string[];
    seletorView: (novaTela: string, evento: React.MouseEvent) => void;
};

const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {

    React.useEffect(() => {
        M.AutoInit();
    }, []);

    const gerarListaBotoes = () => {
        return botoes.map((botao, index) => (
            <li key={index}>
                <a href="#!" onClick={(e) => seletorView(botao, e)}>
                    {botao}
                </a>
            </li>
        ));
    };

    return (
        <>
            <nav className={tema}>
                <div className="nav-wrapper">
                    <a className="brand-logo">WB</a>
                    <a data-target="mobile-menu" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    );
};

export default BarraNavegacao;
