import {useState} from "react";

function AssentoSelecionado({name, disponivel, id}) {
    const [selected, setSelected] = useState(false);
    const [css, setCss] = useState("");

    return <div className={disponivel === false ? "seat Assento indisponivel" : `seat Assento ${css}`}
    onClick={() => {
        setSelected(!selected);
        console.log(selected);
        if (disponivel === false) alert("Esse assento não está disponível")
        else {
            if (!selected) {
                setCss("");
            } else {
                setCss("selecionado");
            }
        }
    }}><span>{name.length === 1 ? `0${name}` : name}</span></div>
}

export default AssentoSelecionado;