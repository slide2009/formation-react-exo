import { useState } from 'react';
import './App.css';
import Formulaire from './components/applications/Formulaire';
import MonComposant from './components/applications/MonComposant';

const App = () => {

  const[compteur, setCompteur] = useState(0);

  return (
    <div className="App">
      Mon application
      <Formulaire setCompteur={setCompteur}/>
      <div>{compteur}</div>
    </div>
  )
}

export default App;
