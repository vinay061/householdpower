import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tabledata from './pages/Tabledata'
import Chartdata from './pages/Chartdata'
import Dchart from './pages/Dchart';

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
            <li>
              <Link to='/dchart'>DChartdata</Link>
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
              <Route path='/dchart'>
                <Dchart/>
              </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
