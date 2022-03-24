import "../../assets/styles/reset.css"
import "../../assets/styles/style.css"

import Header from "../Header"
import Filmes from "../Filmes"
import Sessao from "../Sessao"
import Assento from "../Assento"
import Sucesso from "../Sucesso"

function App() {
    return (
        <main>
            <Header />
            <Filmes />
            <Sessao />
            <Assento />
            <Sucesso />
        </main>
    )
}

export default App;