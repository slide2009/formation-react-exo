import React, { useState } from 'react'

const MonComposant = () => {
	const [nom, setNom] = useState('Toto')
	const [prenom, setPrenom] = useState('Jean')
    const toUcase = lettre => lettre.toUpperCase()
    
    return (
    <>      
        {/* Mis à jour de nom avec le setter */}						
        <label>
            Nom :
            <input type="text" onChange= { e => setNom(e.target.value)} value={nom}/> 
        </label>
        <label>
            Prénom :
            <input type="text" onChange= { e => setPrenom(e.target.value)} value={prenom}/> 
        </label>        
        
        <div>{toUcase(nom)}</div>
        <div>{prenom}</div>
    </>
    )
}

export default MonComposant
							

							