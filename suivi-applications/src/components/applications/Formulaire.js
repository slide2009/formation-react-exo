import React, { useState } from 'react'

const Formulaire = () => {
    const [nom, ..] = useState('');
    const [version, ..]
    
    return <form>
        <input/>
        <input/>
        <select onChange={e => set() }>
            <option value="ACTIVE">Active</option>
            <option value="OBSOLETE">Obsolète</option>
        </select>
        <button onClick = {() => {console.log()} }>Enreg</button>
    </form>
}

export default Formulaire