import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Login from './components/Login'
import Game from './components/Game'
import Home from './components/Home'


function App() {
  return (
    <div className="app-container">
      <Router>
        <Route component={Game} path='/game' />
        <Route component={Home} exact path='/' /> 
        {/* check for logged in user above to render either login or home for path='/' */}
      </Router>
    </div>
  );
}


export default App;
