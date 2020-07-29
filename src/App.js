import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Game from './components/Game'


function App() {
  return (
    <div className="app-container">
      <Router>
        <Route component={Game} path='/game' />
        <Route component={Home} exact path='/'/>        
      </Router>
    </div>
  );
}


export default App;
