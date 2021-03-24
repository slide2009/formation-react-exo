import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Tableau = ({compteur}) => {
    const [data, setData] = useState([])
    
    const charger = () => {
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch("http://localhost:8080/applications", {headers: headers})
        .then(reponse => reponse.json())
        .then(reponse => setData(reponse))
        .catch(e => console.log(e))
    }

    useEffect(() => {
        charger()
    }, [])
    // callback exécuté si seulement la valeur de la dépendance change
    // la dépendance peut être la vérifiée sur un champ d'un objet : [x.y]

    const supprimer = id => {
        fetch(`http://localhost:8080/applications/${id}`, {method: 'DELETE'})
        .then(reponse => charger())
        .catch(e => console.log(e))
    }

    return data.length > 0 
    ? <div>        
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Version</th>
                <th>Etat</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                data.map(appli =>  {
                return (
                <tr key={appli.id}>
                    <td>{appli.id}</td>
                    <td>{appli.nom}</td>
                    <td>{appli.version}</td>
                    <td>{appli.etat}</td>
                    <td><button onClick={e => supprimer(appli.id)} >Supprimer</button></td>
                </tr>
                )
                })
            }
        </tbody>
    </table>
    <Link to={'formulaire'}><button>Saisir un formulaire</button></Link>
    <div>Il y a eu {compteur} enregistrements</div>
    </div>
    : <></>
}  
export default Tableau