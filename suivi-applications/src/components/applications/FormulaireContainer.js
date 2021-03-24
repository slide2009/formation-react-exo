import { connect } from 'react-redux';
import { modifierCompteur } from "./actions";
import Formulaire from './Formulaire';

const mapDispatchToProps = dispatch => ({
	ajouter : valeur => dispatch(modifierCompteur(valeur)) 
});
// const connecteRedux = connect(null, mapDispatchToProps)
// const FormulaireContainer = connecteRedux(Formulaire)
// export default FormulaireContainer;

export default connect(null, mapDispatchToProps)(Formulaire)