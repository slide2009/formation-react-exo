import React from 'react' // toujours
import Enfant from './Enfant'
const MonComposant = props => <div>
    Affichage de Mon composant
    <br/>
    je ne sais pas ce que je vais mettre ensuite
        {props.children}
    </div>

export default MonComposant
