import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../Sucesso/style.css"

function Sucesso() {
    const {state} = useLocation();
    console.log(state.titulo);

    return (
        <>
        <h2 className="Sucesso titulo">Pedido feito com sucesso!</h2>
        <div className="Sucesso sessao-info">
            <h3>Filme e sessão</h3>
            <p>{state.titulo}</p>
            <p>{state.data} {state.horario}</p>
        </div>
        <div className="Sucesso sessao-info">
            <h3>Ingressos</h3>
            <p>{state.ids.map(id => id)}</p>
        </div>
        <div className="Sucesso sessao-info">
            <h3>Comprador</h3>
            <p>Nome: {state.nome}</p>
            <p>CPF: {state.cpf}</p>
        </div>
        <Link to="/"><button className="Sucesso button">Voltar pra Home</button></Link>
        </>
    )
}

export default Sucesso;