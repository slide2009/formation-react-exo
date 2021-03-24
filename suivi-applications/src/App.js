import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import FormulaireContainer from './components/applications/FormulaireContainer';
import Tableau from './components/applications/Tableau';
import TableauContainer from './components/applications/TableauContainer';
import TableauDatagrid from './components/applications/TableauDatagrid';

const App = () => {

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6">Gestion des applications</Typography>
          <Link to={'tableau'} component={Button} color="inherit">Applications</Link>
          <Link to={'formulaire'} component={Button} color="inherit">Création</Link>
        </Toolbar>
      </AppBar>
      Mon application
      <Switch>
        <Route path="/tableau" component={TableauContainer} />
        <Route path="/tableauNC" component={Tableau} />
        <Route path="/tableauDatagrid" component={TableauDatagrid} />
        <Route path="/formulaire" component={FormulaireContainer} />
      </Switch>
    </div>
  )
}

export default App;
