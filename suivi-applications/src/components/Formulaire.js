import React, { useState }  from "react";

const Formulaire = () => {

    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState("OBSOLETE")

    return <form>
        <div> 
            Nom : <input onChange = {e => {
                setNom(e.target.value)
            }
            }/>
        </div>

        <div> 
            Version : <input onChange = {e => setVersion(e.target.value)}/>
        </div>

        <select onChange= {e => setEtat(e.target.value)} value={etat}>
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