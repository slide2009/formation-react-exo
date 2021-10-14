import { connect } from 'react-redux'
import { modifierCompteur } from "./actions"
import Formulaire from './Formulaire'

const mapDispatchToProps = dispatch => ({
	ajouter : valeur => dispatch(modifierCompteur(valeur)), 
	enregistrerNom : nom => dispatch(//Action TODO ..), 
})

export default connect(null, mapDispatchToProps)(Formulaire)