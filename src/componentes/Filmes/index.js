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
            console.log(data);
            setFilmes(data);
        });
    }, [])

    if (filmes.length === 0) {
        return <div className="loading"><img src="https://static.wixstatic.com/media/29698f_30edec9e3734430696d4c8dd105ec70c~mv2.gif" /></div>
    } else {
        return (
            <>
                <h2 className="Filmes titulo">Selecione o filme</h2>
                <div className="Filmes colecao">
                    {filmes.map(filme => {
                        const { id, posterURL, title } = filme;
                        return <Link to={`/sessao/${id}`} key={id}>
                            <div className="filme-box">
                                <div className="movie">
                                    <img src={posterURL} alt={title} />
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
            </>
        )
    }

}

export default Filmes;