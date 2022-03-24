import { Link } from "react-router-dom";

import "../Filmes/style.css"

function Filmes() {

    const filmes = [<div className="filme"></div>, <div className="filme"></div>, <div className="filme"></div>, <div className="filme"></div>, <div className="filme"></div>, <div className="filme"></div>]
    const filme = filmes.map(movie => movie);
    return (
        <>
            <h2 className="Filmes titulo">Selecione o filme</h2>
            <div className="Filmes colecao">
                <Link to="/sessao"><div className="filme"></div></Link>
                {filme}
            </div>
        </>
    )
}

export default Filmes;