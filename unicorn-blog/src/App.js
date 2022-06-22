
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Navbar'
import Home from './Components/Home'
import Galery from './Components/Galery'
import Upload from './Components/Upload'

const App = () => {


  return (
    <Router>
      <div className="App">
        <NavBar />
          <section>
            <Switch>
              <Route exact path="/"> 
                <Home />
              </Route>
              <Route  exact path="/upload"> 
                <Upload />
              </Route>
              <Route exact path="/galery"> 
                <Galery />
              </Route>
            </Switch>          
          </section> 
      </div>
    </Router>
  );
}

export default App;
