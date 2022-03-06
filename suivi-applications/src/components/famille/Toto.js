import React from "react";

const Toto = ({ecrire, nombreClics}) => {
console.log(ecrire)
return <div style={{border: 'solid', borderColor: 'green', margin:'1em', padding:'1em'}}>
    Je suis Toto
    <div>
        <input onChange={e => ecrire(e.target.value)}></input>
    </div>
    <div>
        Nombre de clics {nombreClics}
    </div>
    </div>

}

export default Toto