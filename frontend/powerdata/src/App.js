import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Tabledata from './pages/Tabledata'
import Navb from './Navb';


function App() {
  return (
    <div className="App">
      <Navb/>
      <h1>Data For Power Consumption</h1>
      <Router>
        <div>
          <ul>
            <li className='home'>
              <Link to='/table'>Tabledata</Link>
            </li>
          </ul>
               <Route path='/table'>
                <Tabledata/>
              </Route>
         </div>
      </Router>
    </div>
  );
}

export default App;
