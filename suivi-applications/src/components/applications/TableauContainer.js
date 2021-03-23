import { connect } from 'react-redux';
import Tableau from './Tableau';
const mapStateToProps = state => ({ compteur : state});
export default connect(mapStateToProps)(Tableau);