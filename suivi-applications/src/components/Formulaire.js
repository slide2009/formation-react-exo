import { useState }  from "react";

const Formulaire = ({setCompteur,  compteur}) => {

    const [nom, setNom] = useState('application test')
    const [version, setVersion] = useState(1)
    const [etat, setEtat] = useState("OBSOLETE")

    const enregistrer = () => {
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
            e.preventDefault()
            enregistrer()
        }}>Enregistrer</button>
    </form>
}

export default Formulaire