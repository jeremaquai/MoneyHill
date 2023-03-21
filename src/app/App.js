// Import React
import React, { useEffect } from 'react';

// Imports from React-redux
import { 
  useSelector, 
  useDispatch 
} from 'react-redux';

import { 
  selectMobileLayout,
  setWindowHeight, 
  setWindowWidth 
} from './appSlice';


// import BrowserRouter from react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

// import CSS file for App.js
import './App.css';

// import components here
import Header from '../components/Header/Header';
import PageBody from '../components/PageBody/PageBody';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer/Footer';

// main App function
function App() {

  const mobileState = useSelector(selectMobileLayout);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setWindowWidth(window.innerWidth));
      dispatch(setWindowHeight(window.innerHeight));
    })
    
  }, []);

  const mobileAction = () => {
    while (!mobileState) {
      return (
        <Router className='App'>
          <Header />
          <div className='MenuAndBody' >
            <SideBar />
            <div className='BodyAndFooter' >
              <PageBody />
              <Footer />
            </div>
          </div>
        </Router>
      );
    }

    while (mobileState) {
      return (
        <Router className={'mobileApp'} >
          <Header />
        </Router>
      );
    }
  }

  return mobileAction();
}

export default App;
