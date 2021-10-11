import React, { useState }  from "react";

const Formulaire = () => {

    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState()

    const selectionEtat = e => console.log(e.target.value)

    return <form>

        <label>
        Nom :
        <input onChange = {e => {
            console.log(e.target.value)
            // setNom ...
        }}/>

        </label>
        <br/>

        <label>
            Etat <input></input>
        </label>

        <select onChange= {selectionEtat}>
            <option value="ACTIVE">ACTIVE </option>
            <option value="OBSOLETE">OBSOLETE</option>
            {/* <option ... */}
        </select>

        <button onClick = { e => {
            e.preventDefault();
            console.log(nom)}

        }>Enregistrer</button>
    </form>
}

export default Formulaire