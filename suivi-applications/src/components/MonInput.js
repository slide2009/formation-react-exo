import React, { useState } from 'react' 
			
const MonInput = () => {
	// MonComposant a un état local nom, initialisé avec la valeur 'Toto' :
	const [nom, setNom] = useState('Toto')
	
    return <div>      
		{/* Mise à jour de nom avec le setter */}						
		<label>
			Nom : <input type="text" onChange= { e => setNom(e.target.value)} /> 
		</label>
		<div>{nom}</div>      
    </div>
}
		
export default MonInput