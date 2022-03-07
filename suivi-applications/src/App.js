import { useState } from 'react';
import './App.css';
import ComposantClasse from './components/ComposantClasse';
import ComposantFunc from './components/ComposantFunc';
import Formulaire from './components/Formulaire';

const App = () => {
  const [compteur, setCompteur] = useState(0)
  return <>
    <ComposantClasse/>
    <ComposantFunc/>
  </>
  ;
}

export default App;
