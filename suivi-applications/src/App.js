import { useState } from 'react';
import './App.css';
import Tableau from './components/Tableau';
import MaDiv from './components/MaDiv';
import MonComposant from './components/MonComposant';
import Formulaire from './components/Formulaire';

const App = () => {

  return (
    <div className="App">
      <Formulaire/>
      <Tableau/>
    </div>
  );
}

export default App;
