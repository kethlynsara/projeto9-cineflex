import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Footer from "../Footer";
import AssentoSelecionado from "../AssentoSelecionado";
import "../Assento/style.css";

function Assento() {
    const { idSessao } = useParams();
    console.log("idSessao", idSessao);

    const [sessaoChosen, setSessaoChosen] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("")
    const [idsArray, setIdsArray] = useState([]);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => {
            const { data } = resposta;
            setSessaoChosen(data);
        })
    }, []);


    console.log("estado", sessaoChosen)
    const navigate = useNavigate();

    function submitDados(event) {
        event.preventDefault()

        // const dadosSessao = {
        //     ids: idsArray,
        //     titulo: sessaoChosen.movie.title,
        //     horario: sessaoChosen.name,
        //     data: sessaoChosen.day.date,
        //     nome: nome,
        //     cpf: cpf
        // }
        
        navigate("/checkout", {state: 
            {
                ids: idsArray,
                titulo: sessaoChosen.movie.title,
                horario: sessaoChosen.name,
                data: sessaoChosen.day.date,
                nome: nome,
                cpf: cpf
            }});
        alert(nome);
        alert(cpf);
    }

    if (sessaoChosen.length !== 0) {
        return (
            <>
                <h2 className="Assento titulo">Selecione o(s) assento(s)</h2>
                <div className="Assento assentos">
                    {sessaoChosen.seats.map(seat => <AssentoSelecionado name={seat.name} disponivel={seat.isAvailable} id={seat.id} idsArray={idsArray} setIdsArray={setIdsArray}/>)}
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
                <form onSubmit={submitDados}>
                    <div className="Assento nome-user info-user">
                        <p>Nome do comprador:</p>
                        <input type="text"
                            placeholder="Digite seu nome..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        ></input>
                    </div>
                    <div className="Assento cpf-user info-user" >
                        <p>CPF do comprador:</p>
                        <input type="text"
                            placeholder="Digite seu CPF..."
                            value={cpf}
                            onChange={(e) => setCPF(e.target.value)}
                        ></input>
                    </div>
                   <button className="Assento button" type="submit">Reservar assento(o)s</button>
                </form>                
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