import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './views/Home'
import Brewing from './views/GameView/Brewing';

import './App.css';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/"  component={Home} exact/>
            <Route path="/play"  component={Brewing}/>
        </Switch>
      </Router>
      </>
  );
}

export default App;
