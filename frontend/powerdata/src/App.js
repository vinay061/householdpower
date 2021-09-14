import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tabledata from './pages/Tabledata'
import Chartdata from './pages/Chartdata'


function App() {
  return (
    <div className="App">
      <p>App Page</p>
      <Router>
        <div>
          <ul>
            <li className='home'>
              <Link to='/table'>Tabledata</Link>
            </li>
            <li className='about'>
              <Link to='/chart'>Chartdata</Link>
            </li>
          </ul>
           {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <Switch>
              <Route path='/table'>
                <Tabledata/>
              </Route>
              <Route path='/chart'>
                <Chartdata/>
              </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
