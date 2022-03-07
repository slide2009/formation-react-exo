import React, { useState } from 'react' // toujours
import MonComposantEnfant from './MonComposantEnfant'

const MonComposantState = props => {
	// MonComposant a un état local nom, initialisé avec la valeur 'Toto' :
	const [nom, setNom] = useState('Toto')
	const variable = 'trmtlm'

	return <div>  
        {variable}    
		{/* Mise à jour de nom avec le setter */}						
		<label>
			Nom : <input type="text" onChange= { e => setNom(e.target.value)} /> 
		</label>
        <div>Nom papa {nom}</div>
		<div>
            <MonComposantEnfant valeur={nom}></MonComposantEnfant>
        </div>
        <div>
            Prénom {props.prenom}
        </div>      
	</div>
}

export default MonComposantState
