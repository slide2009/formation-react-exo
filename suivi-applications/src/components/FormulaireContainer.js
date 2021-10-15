import { connect } from 'react-redux'
import { modifierCompteur, ecrireNom } from "./actions"
import Formulaire from './Formulaire'

const mapDispatchToProps = dispatch => ({
	ajouter : valeur => dispatch(modifierCompteur(valeur)), 
	enregistrerNom : nom => dispatch(ecrireNom(nom)), 
})

export default connect(null, mapDispatchToProps)(Formulaire)