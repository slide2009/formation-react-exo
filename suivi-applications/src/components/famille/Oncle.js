import React from "react";
import Cousin from "./Cousin";
import Toto from "./Toto";

const Oncle = () => <div style={{border: 'solid', borderColor: 'pink', margin:'1em', padding:'1em'}}>
    Je suis Oncle

    <Cousin/>
    </div>

export default Oncle