import React, { useState } from 'react'

const Formulaire = ({setCompteur}) => {
    const [nom, setNom] = useState('');
    const [version, setVersion] = useState('');
    const [etat, setEtat] = useState('ACTIVE');
    
    const enregistrer = e => {
        e.preventDefault();
        console.log(` ${nom} ${version} ${etat}`)
        setCompteur(compteur => compteur+1);
    }

    return <form>
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
        <button onClick = {enregistrer}>Enregistrer</button>
    </form>
}

export default Formulaire