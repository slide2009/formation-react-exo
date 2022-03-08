import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Formulaire from './components/Formulaire';
import Tableau from './components/Tableau';

const App = () => {
  return <>
  Bienvenue dans l'application
    <Routes>
      <Route path='tableau' element={<Tableau/>}/>
      <Route path='formulaire' element={<Formulaire/>}/>
    </Routes>
  </>
    ;
}

export default App;
