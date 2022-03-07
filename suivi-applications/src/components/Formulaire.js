import { useState }  from "react";

const Formulaire = ({setCompteur,  compteur}) => {

    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState("OBSOLETE")

    return <form>
        <div> 
            Nom : <input onChange = {e =>  setNom(e.target.value)} value={nom}/>
        </div>
        <div> 
            Version : <input onChange = {e => setVersion(e.target.value)} value={version}/>
        </div>
        <select onChange= {e => setEtat(e.target.value)} value={etat}>
            <option value="ACTIVE">ACTIVE </option>
            <option value="OBSOLETE">OBSOLETE</option>
        </select>

        <button onClick = { e => {
            const compteurIncr = compteur +1;
            setCompteur(compteurIncr)
            e.preventDefault();
            console.log(nom)
            console.log(version)
            console.log(etat)
        }}>Enregistrer</button>
    </form>
}

export default Formulaire