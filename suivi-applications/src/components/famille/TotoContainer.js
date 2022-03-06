import { connect } from "react-redux";
import { ecrireMessage } from "../actions";
import Toto from "./Toto";

const mapDispatchToProps = dispatch => ({
    ecrire : message => dispatch(ecrireMessage(message))
})

const mapStateToProps = state => ({ nombreClics : state.compteur})

export default connect(mapStateToProps, mapDispatchToProps)(Toto)