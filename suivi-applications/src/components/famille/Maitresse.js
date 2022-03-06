import React, { useState } from "react";
import Oncle from "./Oncle";
import Papa from "./Papa";
import PetitCousin from "./PetitCousin";
import Toto from "./Toto";

const Maitresse = () => {

return <div style={{border: 'solid', borderColor: 'red', margin:'1em', padding:'1em'}}>
    Je suis Maitresse
    <PetitCousin message='sois sage'/>
    
    </div>

}

export default Maitresse