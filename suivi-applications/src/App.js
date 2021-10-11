import { useState } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import MaDiv from './components/MaDiv';
import MonComposant from './components/MonComposant';

const App = () => {

  const [compteur, setCompteur] = useState(1)

  return (
    <div className="App">
      Nombre de clics : {compteur}
      <Formulaire/>
    </div>
  );
}

export default App;
