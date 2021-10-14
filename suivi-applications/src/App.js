import { useState } from 'react';
import './App.css';
import Tableau from './components/Tableau';
import MaDiv from './components/MaDiv';
import MonComposant from './components/MonComposant';
import Formulaire from './components/Formulaire';
import MonComposantIntro from './components/MonComposantIntro';
import { Route, Switch } from 'react-router';
import FormulaireContainer from './components/FormulaireContainer';
import TableauContainer from './components/TableauContainer';

const App = () => {
  return<> 
  <Switch>
		<Route exact path="/tableau" component={TableauContainer}/>
		<Route path="/formulaire" component={FormulaireContainer}/>
		{/* <Route path="/formulaire/toto" component={Formulaire}/> */}
	</Switch>
  </>
  
}


export default App;
