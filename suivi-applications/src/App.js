import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import DashboardContainer from './components/DashboardContainer';
import Formulaire from './components/Formulaire';
import FormulaireContainer from './components/FormulaireContainer';
import MonComposant from './components/MonComposant';
import Tableau from './components/Tableau';
import TableauContainer from './components/TableauContainer';

const App = () => {
  
  return <>
    <Routes>
      <Route path='formulaire-redux' element={<FormulaireContainer/>}/>
      <Route path='tableau-redux' element={<TableauContainer/>}/>
      <Route path='dashboard-redux' element={<DashboardContainer/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='demo' element={<MonComposant/>}/>
    </Routes>
  </>
    ;
}

export default App;
