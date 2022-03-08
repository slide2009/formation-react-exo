import { connect } from "react-redux"
import Dashboard from "./Dashboard"


const mapStateToProps = state => ({ nomApplication : state.nomAppli})

export default connect(mapStateToProps)(Dashboard)