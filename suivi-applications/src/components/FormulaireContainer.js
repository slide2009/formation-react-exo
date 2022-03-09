import { connect } from 'react-redux'
import Formulaire from './Formulaire'
import { majNomAppli, modifierCompteur } from './redux/actions'

const mapDispatchToProps = dispatch => (
    {
    	incrementer : () => dispatch(modifierCompteur()), 
    	mettreAJour : valeur => dispatch(majNomAppli(valeur)), 
    }
)
export default connect(null, mapDispatchToProps)(Formulaire)