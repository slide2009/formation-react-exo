import { useState }  from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import MonInput from "./MonInput";
import Tableau from "./Tableau";

const Formulaire = ({ajouter, mettreAJour}) => {

    const { state } = useLocation();
    const [nom, setNom] = useState(state && state.nomAppli ? state.nomAppli : 'application test')
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
        .then(reponse => {
            console.log(reponse)
            ajouter(1)
            mettreAJour(nom)
        })
        .catch(e => console.log(e))
    }

    return <>
    <form>
        <div> 
            Nom : <MonInput value={nom} onChange={e =>  setNom(e.target.value)}/>
            {/* Nom : <input onChange = {e =>  setNom(e.target.value)} value={nom}/> */}
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
        {console.log(state)}
    </form>
     <div>
         <Link to={'/tableau-redux'}>Retour vers le tableau</Link>
     </div>
    </>
}

export default Formulaire