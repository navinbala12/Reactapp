import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/home' component={Home}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
