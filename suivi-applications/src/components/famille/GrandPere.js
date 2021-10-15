import React, { useState } from "react";
import Oncle from "./Oncle";
import Papa from "./Papa";
import Toto from "./Toto";

const GrandPere = () => {

return <div style={{border: 'solid', borderColor: 'red', margin:'1em', padding:'1em'}}>
    Je suis GrandPere
    <Papa/>
    <Oncle/>
    </div>

}

export default GrandPere