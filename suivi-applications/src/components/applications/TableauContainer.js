import { connect } from 'react-redux';
import Tableau from './Tableau';

const mapStateToProps = storeState => ({ compteur : storeState.compteur});

export default connect(mapStateToProps)(Tableau);