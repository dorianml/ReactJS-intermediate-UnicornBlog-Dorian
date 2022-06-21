
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home'
import Articles from './Components/Articles';


const App = () => {
  
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log('API CONNECTED')
        return response.json()
      })
      .then((result) =>{
        setArticles(result)
        console.log('SET API UPDATE')
      })
    }, [])

  return (
    router(
    <div className="App">
      <header className="App-header">
        <div className='Logo'>
          LOGO
        </div>
        <div className='Nav-links'>
          <p>
            Upload
          </p>
          <p>
            Galery
          </p>
        </div>
      </header>
      <section>
        <Switch>
          <Route path="/Home"> 

          </Route>
        </Switch>
        <Articles className="Article-apercu-section"/>
        
      </section>
    </div>
  )
  );
}

export default App;
