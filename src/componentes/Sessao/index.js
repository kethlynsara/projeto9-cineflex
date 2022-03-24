import { Link } from "react-router-dom";

import "../Sessao/style.css"
import Footer from "../Footer"

function Sessao() {
    return (
        <>
            <h2 className="Sessao titulo">Escolha o horário</h2>
            <div className="Sessao sessao-info">
                <p>Quinta-feira - 24/06/2021</p>
                <div class="Sessao horarios">
                    <Link to="/assento"><button className="Sessao horario ">15:00</button></Link>
                    <Link to="/assento"><button className="Sessao horario ">19:00</button></Link>
                </div>
            </div>
            <div className="Sessao sessao-info">
                <p>Sexta-feira - 25/06/2021</p>
                <div class="Sessao horarios">
                    <Link to="/assento"><button className="Sessao horario ">15:00</button></Link>
                    <Link to="/assento"><button className="Sessao horario ">19:00</button></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sessao;