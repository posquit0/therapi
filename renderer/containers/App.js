import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import MainPane from '../components/MainPane';
import AuxPane from '../components/AuxPane';
import './App.css';
import './Tabs.css';


const App = () => (
  <div className="app">
    <Sidebar />
    <MainPane />
    <AuxPane />
  </div>
);

export default App;
