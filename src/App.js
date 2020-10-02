import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import Login from './components/Login'
import Collection from './components/Collection'
import SignUp from './components/SignUp'
import './css/index.css'

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route component={Game} path='/game' />
        <Route component={Login} exact path='/login' /> 
        <Route component={Collection} exact path='/collection' /> 
        <Route component={Home} path='/home' />
        <Route component={SignUp} path='/signup' />
        {/* check for logged in user above to render either login or home for path='/' */}
      </Router>
    </div>
  );
}


export default App;
