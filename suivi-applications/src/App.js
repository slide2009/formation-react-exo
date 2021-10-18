import { Route, Switch } from 'react-router';
import './App.css';
import GrandPere from './components/famille/GrandPere';
import Maitresse from './components/famille/Maitresse';
import Papa from './components/famille/Papa';
import Toto from './components/famille/Toto';
import FormulaireContainer from './components/FormulaireContainer';
import NameForm from './components/NameForm';
import NameFormFunc from './components/NameFormFunc';
import TableauContainer from './components/TableauContainer';

const App = () => {
  return<> 
  
  <Switch>
		<Route exact path="/name-form2" component={NameFormFunc}/>
		<Route exact path="/name-form" component={NameForm}/>
		<Route exact path="/maitresse" component={Maitresse}/>
		<Route exact path="/grand-pere" component={GrandPere}/>
		<Route exact path="/papa" component={Papa}/>
		<Route exact path="/toto" component={Toto}/>
		<Route exact path="/tableau" component={TableauContainer}/>
		<Route path="/formulaire" component={FormulaireContainer}/>
		{/* <Route path="/formulaire/toto" component={Formulaire}/> */}
	</Switch>
  </>
  
}


export default App;
