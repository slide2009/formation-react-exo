import { useState } from 'react';
import './App.css';
import Formulaire from './components/applications/Formulaire';
import MonComposant from './components/applications/MonComposant';

const App = () => {

  return (
    <div className="App">
      Mon application
      <Formulaire/>
    </div>
  )
}

export default App;
