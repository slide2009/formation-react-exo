import { connect } from 'react-redux'
import Formulaire from './Formulaire'
import { majNomAppli, modifierCompteur } from './redux/actions'

const mapDispatchToProps = dispatch => (
    {
    	ajouter : valeur => dispatch(modifierCompteur(valeur)), 
    	mettreAJour : valeur => dispatch(majNomAppli(valeur)), 
    }
)
export default connect(null, mapDispatchToProps)(Formulaire)