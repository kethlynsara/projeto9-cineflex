import "../Footer/style.css"


function Footer({imagem, titulo}) {
    return (
        <footer className="Footer">
            <div className="box">
                <div className="movie">
                    <img src={imagem} />
                </div>
            </div>
            <p>{titulo}</p>
        </footer>
    )
}

export default Footer;