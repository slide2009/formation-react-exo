import './App.css';
import {Switch, Route} from 'react-router-dom'
import Formulaire from './components/applications/Formulaire';
import Tableau from './components/applications/Tableau';
import FormulaireContainer from './components/applications/FormulaireContainer';
import TableauContainer from './components/applications/TableauContainer';

const App = () => {

  return (
    <div className="App">
      Mon application
      <Switch>
        <Route path="/tableau" component={TableauContainer} />
        <Route path="/formulaire" component={FormulaireContainer} />
      </Switch>
    </div>
  )
}

export default App;
