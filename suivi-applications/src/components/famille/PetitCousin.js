import React from "react";
import { connect } from "react-redux";
import Toto from "./Toto";

const PetitCousin = ({message}) => <div style={{border: 'solid', borderColor: 'grey', margin:'1em', padding:'1em'}}>
    Je suis PetitCousin

    <div>
        Message reçu : {message}
    </div>
    </div>


const mapStateToProps = state => ({message : state.message})

export default connect(mapStateToProps)(PetitCousin)