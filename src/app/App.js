// Import React
import React from 'react';


// import BrowserRouter from react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

// import CSS file for App.js
import './App.css';

// import components here
import Header from '../components/Header/Header';
import PageBody from '../components/PageBody/PageBody';
import SideBar from '../components/SideBar/SideBar';

// main App function
function App() {
  return (
    <Router className='App'>
      <Header />
      <div className='MenuAndBody' >
        <SideBar />
        <PageBody />
      </div>
    </Router>
  );
}

export default App;
