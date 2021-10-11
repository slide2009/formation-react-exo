import React, { useState }  from "react";

const Formulaire = ({nomDefaut, setNomDefaut}) => {

    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState("OBSOLETE")

    const selectionEtat = e => setEtat(e.target.value)


    return <form>
        <div> 
            Nom : <input onChange = {e => {
                setNom(e.target.value)
                setNomDefaut(e.target.value)
            }
            } value={nom}/>
        </div>

        <div> 
            Version : <input onChange = {e => setVersion(e.target.value)} value={version}/>
        </div>

        <select onChange= {selectionEtat} value={etat}>
            <option value="ACTIVE">ACTIVE </option>
            <option value="OBSOLETE">OBSOLETE</option>
        </select>

        <button onClick = { e => {
            e.preventDefault();
            console.log(nom)
            console.log(version)
            console.log(etat)
        }}>Enregistrer</button>
    </form>
}

export default Formulaire