import './App.css';
import {Switch, Route} from 'react-router-dom'
import Formulaire from './components/applications/Formulaire';
import Tableau from './components/applications/Tableau';

const App = () => {

  return (
    <div className="App">
      Mon application
      <Switch>
        <Route path="/tableau" component={Tableau} />
        <Route path="/formulaire" component={Formulaire} />
      </Switch>
    </div>
  )
}

export default App;
