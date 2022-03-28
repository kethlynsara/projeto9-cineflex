import {useState} from "react";

function AssentoSelecionado({name, disponivel, id, idsArray, setIdsArray}) {
    const [selected, setSelected] = useState(false);
    const [css, setCss] = useState("");
    let aux = [];

    return <div className={disponivel === false ? "seat Assento indisponivel" : `seat Assento ${css}`}
    onClick={() => {
        setSelected(!selected);
        console.log(selected);
        if (disponivel === false) alert("Esse assento não está disponível")
        else {
            if (selected) {
                setCss("selecionado");
            } else {
                setCss("");
            }

            if (idsArray.includes(id)) {
                aux = [...idsArray]
                aux.filter(elemento => elemento !== id);  
                setIdsArray(aux);              
                console.log("ids", idsArray)
                console.log("aux", aux)
            } else {
                setIdsArray([...idsArray, id]);
                console.log(idsArray)
            }
            console.log(idsArray);
        }
    }}><span>{name.length === 1 ? `0${name}` : name}</span></div>
}

export default AssentoSelecionado;