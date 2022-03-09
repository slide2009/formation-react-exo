import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import DashboardContainer from './components/DashboardContainer';
import Formulaire from './components/Formulaire';
import FormulaireContainer from './components/FormulaireContainer';
import FormulaireFormik from './components/FormulaireFormik';
import MonComposant from './components/MonComposant';
import Tableau from './components/Tableau';
import TableauContainer from './components/TableauContainer';
import TableauDataGrid from './components/TableauDataGrid';
import TableauDatatables from './components/TableauDatatables';

const App = () => {
  
  return <>
    <Routes>
      <Route path='formulaire-redux' element={<FormulaireContainer/>}/>
      <Route path='tableau-redux' element={<TableauContainer/>}/>
      <Route path='dashboard-redux' element={<DashboardContainer/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='demo' element={<MonComposant/>}/>
      <Route path='tableau-datatables' element={<TableauDatatables/>}/>
      <Route path='tableau-datagrid' element={<TableauDataGrid/>}/>
      <Route path='formulaire-formik' element={<FormulaireFormik/>}/>
    </Routes>
  </>
    ;
}

export default App;
