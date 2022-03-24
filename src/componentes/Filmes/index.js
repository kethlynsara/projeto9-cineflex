import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

import "../Filmes/style.css"

function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((resposta) => {
            const { data } = resposta;
            setFilmes(data);
        });
    }, [])

    return (
        <>
            <h2 className="Filmes titulo">Selecione o filme</h2>
            <div className="Filmes colecao">
                {filmes.map(filme => {
                    return <Link to="/sessao">
                               <div className="filme-box">
                                    <div className="movie"> 
                                        <img src={filme.posterURL} alt={filme.title} />
                                    </div>
                                </div>
                           </Link>
                })}
            </div>
        </>
    )
}

export default Filmes;