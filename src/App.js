import React from 'react';
import { AppProvider,useAppContext } from './AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Copyright from './components/Copyright';
import BottomNavi from './components/BottomNavi';
import './App.css';
import './HYUN.css';

function App() {

  return (
    <AppProvider>
      <div className='AppFrame'>
        <main className='main_container'>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
          <footer>
            <Copyright />
          </footer>
          <Router>
            <LoggedInBottomNavi />
          </Router>
        </main>
      </div>
    </AppProvider>
  );
}

function LoggedInBottomNavi() {
  const { isLoggedIn } = useAppContext();

  if (!isLoggedIn) {
    return null;
  }
  const style = {
    paddingBottom: 'var(--qucik-height)', 
  };

  return (
    <div style={style}>
      <BottomNavi />
    </div>
  );
}

export default App;