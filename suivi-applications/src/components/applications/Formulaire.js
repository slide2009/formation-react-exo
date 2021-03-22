import React, { useState } from 'react'

const Formulaire = () => {
    const [nom, setNom] = useState('');
    const [version, setVersion] = useState('');
    const [etat, setEtat] = useState('ACTIVE');
    const [message, setMessage] = useState('');
    
    const enregistrer = e => {
        const headers = new Headers();
        headers.append("Content-Type" , "application/json")
        fetch("http://localhost:8080/applications",
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({nom: nom, version: version, etat: etat})
            })
        .then(reponse => setMessage('Enregistré'))
        .catch(e => setMessage('Problème'))                
    }

    return <form>
        <div>{message}</div>
        <label>
            Nom :
            <input type="text" onChange= { e => setNom(e.target.value)} value={nom}/> 
        </label>
        <label>
            Version :
            <input type="text" onChange= { e => setVersion(e.target.value)} value={version}/> 
        </label>
        <select onChange={e => setEtat(e.target.value) }>
            <option value="ACTIVE">Active</option>
            <option value="OBSOLETE">Obsolète</option>
        </select>

        <button type="button" onClick = {enregistrer}>Enregistrer</button>
    </form>
}

export default Formulaire