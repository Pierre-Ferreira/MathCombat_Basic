import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import TablesMainComp from './components/TablesModule/TablesMainComp';
import SumsMainComp from './components/SumsModule/SumsMainComp';
import NavbarComp from './components/NavbarComp/NavbarComp';

const App = () => (
  <div id="main-app-area">
    <NavbarComp />
    <main>
      <Route exact path="/tables" component={TablesMainComp} />
      <Route exact path="/sums" component={SumsMainComp} />
    </main>
  </div>

);


export default App;
