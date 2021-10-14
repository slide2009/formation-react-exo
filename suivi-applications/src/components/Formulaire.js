import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";

const Formulaire = ({ajouter, enregistrerNom}) => {

    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState("OBSOLETE")

    const selectionnerEtat = e => setEtat(e.target.value)
    
    const enregistrer = e => {
        e.preventDefault();
        ajouter(1)
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch("http://localhost:8080/applications",
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({nom: nom, version: version, etat: etat})
            })
        .then(reponse => console.log(reponse))
        .catch(e => console.log(e))
    }

    return <form>
        <div> 
            Nom : <input onChange = {e => {
                setNom(e.target.value)
            }} value={nom}/>
        </div>
        <div> 
            Version : <input onChange = {e => setVersion(e.target.value)} value={version}/>
        </div>
        <select onChange= {selectionnerEtat} value={etat}>
            <option value="ACTIVE">ACTIVE </option>
            <option value="OBSOLETE">OBSOLETE</option>
        </select>

        <button onClick = { enregistrer}>Enregistrer</button>
        <div></div>
    </form>
}

export default Formulaire