import { useState } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import MaDiv from './components/MaDiv';
import MonComposant from './components/MonComposant';

const App = () => {

  const [nomDefaut, setNomDefaut] = useState('Appli parent')

  return (
    <div className="App">
      Le nom d'appli du parent : {nomDefaut}
      <Formulaire nomDefaut={nomDefaut} setNomDefaut={setNomDefaut}/>
    </div>
  );
}

export default App;
