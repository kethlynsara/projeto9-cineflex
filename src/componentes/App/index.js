import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header"
import Filmes from "../Filmes"
import Sessao from "../Sessao"
import Assento from "../Assento"
import Sucesso from "../Sucesso"

import "../../assets/styles/reset.css"
import "../../assets/styles/style.css"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Filmes />}></Route>
                    <Route path="/sessao/:sessaoid" element={<Sessao />}></Route>
                    <Route path="/assento/:idSessao" element={<Assento />}></Route>
                    <Route path="/checkout" element={<Sucesso />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App;