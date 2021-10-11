import React from "react";
import MonComposant from "./MonComposant";

const MaDiv = (props) => {

    return <div style={{border: 'solid'}}>
        {props.children}
        <MonComposant/>
    </div>
}

export default MaDiv