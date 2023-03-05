// Import React
import React from 'react';


// import BrowserRouter from react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// import components here
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import PageBody from '../components/PageBody/PageBody';

// main App function
function App() {
  return (
    <Router className='App'>
      <Header />
      <div className='MenuAndBody' >
        <Menu />
        <PageBody />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
