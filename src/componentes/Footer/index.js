import "../Footer/style.css"


function Footer({ imagem, titulo, horario, data }) {
    return (
        <footer className="Footer">
            <div className="box">
                <div className="movie">
                    <img src={imagem} />
                </div>
            </div>
            <div className="movie-info">
                <p>{data} {horario}</p>
                <p>{titulo}</p>
            </div>
        </footer>
    )
}

export default Footer;