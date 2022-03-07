import logo from './logo.svg';
import './App.css';
import MonComposant from './components/MonComposant';
import MonComposantState from './components/MonComposantState';
import Enfant from './components/Enfant';

const App = () => {
  return (
    <div className="App">
      <MonComposant>
        <Enfant/>
      </MonComposant>
    </div>
  );
}

export default App;
