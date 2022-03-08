import { useState } from "react"

const PetitEnfant2 = () => {
    const [compteur, setCompteur] = useState(1)
    return <>
    <div>
        Petit Enfant 2
    </div>
    <div>
        Compteur petit enfant2 : {compteur}
    </div>
    
    <div>
        <button onClick={e => setCompteur(compteur => compteur +1)}>Incrémenter dans PetitEnfant2</button>
    </div>
    </>
}

export default PetitEnfant2