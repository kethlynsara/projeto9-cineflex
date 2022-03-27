import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../Sessao/style.css"
import Footer from "../Footer"

function Sessao() {
    const { sessaoid } = useParams();
    const [sessaoInfo, setSessaoInfo] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessaoid}/showtimes`);
        promise.then((resposta) => {
            const { data } = resposta;
            setSessaoInfo(data);
        })
    }, []);

    const { days } = sessaoInfo;    

    if (sessaoInfo.length === 0) {
        return <p>Loading...</p>
    } else {
        console.log(sessaoInfo);
        console.log(days)
        return (
            <>
                <h2 className="Sessao titulo">Escolha o horário</h2>
                <div className="Sessao sessao-info">
                    {days.map(day => {
                        return (
                            <>
                                <p>{day.weekday} - {day.date}</p>
                                <div className="Sessao horarios" >
                                    {day.showtimes.map(showtime => {
                                        return (
                                            <Link to={`/assento/${showtime.id}`}><button className="Sessao horario ">{showtime.name}</button></Link>
                                        )
                                    })}
                                </div>
                            </>
                        );
                    })}

                </div>
                <Footer imagem={sessaoInfo.posterURL} titulo={sessaoInfo.title} />
            </>
        )
    }
}

export default Sessao;