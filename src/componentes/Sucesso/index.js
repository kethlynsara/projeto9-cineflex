import { Link } from "react-router-dom";

import "../Sucesso/style.css"

function Sucesso() {
    return (
        <>
        <h2 className="Sucesso titulo">Pedido feito com sucesso!</h2>
        <div className="Sucesso sessao-info">
            <h3>Filme e sessão</h3>
            <p>Enola Holmes</p>
            <p>24/06/2021 15:00</p>
        </div>
        <div className="Sucesso sessao-info">
            <h3>Ingressos</h3>
            <p>Assento 15</p>
            <p>Assento 16</p>
        </div>
        <div className="Sucesso sessao-info">
            <h3>Comprador</h3>
            <p>Nome: João da Silva Sauro</p>
            <p>CPF: 123.456.789-10</p>
        </div>
        <Link to="/"><button className="Sucesso button">Voltar pra Home</button></Link>
        </>
    )
}

export default Sucesso;