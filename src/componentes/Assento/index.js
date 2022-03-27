import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import Footer from "../Footer";
import AssentoSelecionado from "../AssentoSelecionado";
import "../Assento/style.css";

function Assento() {
    const { idSessao } = useParams();
    console.log("idSessao", idSessao);

    const [sessaoChosen, setSessaoChosen] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => {
            const { data } = resposta;
            setSessaoChosen(data);
        })
    }, []);


    console.log("estado", sessaoChosen)

    if (sessaoChosen.length !== 0) {
        return (
            <>
                <h2 className="Assento titulo">Selecione o(s) assento(s)</h2>
                <div className="Assento assentos">
                    {sessaoChosen.seats.map(seat => <AssentoSelecionado name={seat.name} disponivel={seat.isAvailable} id={seat.id} />)}
                </div>
                <div className="Assento opcoes">
                    <span>
                        <div className="Assento seat selecionado"></div>
                        <p>Selecionado</p>
                    </span>
                    <span>
                        <div className="seat Assento disponivel"></div>
                        <p>Disponível</p>
                    </span>
                    <span>
                        <div className="seat Assento indisponivel"></div>
                        <p>Indisponível</p>
                    </span>
                </div>
                <div className="Assento nome-user info-user">
                    <p>Nome do comprador:</p>
                    <input type="text" placeholder="Digite seu nome..."></input>
                </div>
                <div className="Assento cpf-user info-user" >
                    <p>CPF do comprador:</p>
                    <input type="text" placeholder="Digite seu CPF..."></input>
                </div>
                <Link to="/checkout"><button className="Assento button">Reservar assento(o)s</button></Link>
                <Footer imagem={sessaoChosen.movie.posterURL} titulo={sessaoChosen.movie.title} />
            </>
        )
    } else {
        return <p>Loading...</p>
    }
}

export default Assento;

// {
//     return <div className={seat.isAvailable === false ? "seat Assento indisponivel" : `seat Assento ${css}`}
//         onClick={() => {
//             setSelected(!selected)
//             console.log(selected)
//             if (seat.isAvailable === false) alert("Esse assento não está disponível");
//             else {
//                 if (!selected) {
//                     setCss("");
//                 } else {
//                     setCss("selecionado");
//                 }
//             }
//         }}><span>{seat.name.length === 1 ? `0${seat.name}` : seat.name}</span></div>
// }