import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './Components/Navbar'
import Home from './Components/Home'
import Galery from './Components/Galery'
import Upload from './Components/Upload'
import Article from './Components/Article';

import './App.css';

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
              <Route exact path='/article/:id'> 
                <Article />
              </Route>
            </Switch>          
          </section> 
      </div>
    </Router>
  );
}

export default App;
