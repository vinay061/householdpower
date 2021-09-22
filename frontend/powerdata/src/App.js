import './App.css';
import React from 'react'
import { createContext } from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';
import Drafttable from './pages/Drafttable';
import Chartone from './pages/Chartone';
import Charttwo from './pages/Charttwo';
import Displayall from './pages/Displayall';
import Home from './pages/Home';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export const DataContext = createContext()

function App() {
  const [powerData, setPowerData] = useState([])
  
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
     await axios.get("http://localhost:5000/data")
               .then(res => {
                 setPowerData(res.data)
                })
               .catch(err => {
                 console.log(err)
               })
  }
  

  return (
    <div className="App">
       <Router>
       <Navbar bg="secondary" variant="light" expand="lg">
            <Container>
              <Link to='/' className="linklist">Home</Link>
              <Link to='/drafttable' className="linklist">Table</Link>
              <Link to='/chartone' className="linklist">Chart One</Link>
              <Link to='/charttwo' className="linklist">Chart Two</Link>
              <Link to='/displayall' className="linklist">Display All</Link>
            </Container>
      </Navbar>
      
      
      <h1>Data For Power Consumption</h1>  
        <ul>
          <li className="list"><Link to='/drafttable'>Table</Link></li>
          <li className="list"><Link to='/chartone'>Chart One</Link></li>
          <li className="list"><Link to='/charttwo'>Chart Two</Link></li>
          <li className="list"><Link to='/'>Home</Link></li>
        </ul>
        <Switch>
          <Route path='/drafttable'>
            <DataContext.Provider value={powerData}>
              <Drafttable/>
            </DataContext.Provider>
          </Route>
          <Route path='/chartone'>
            <DataContext.Provider value={powerData}>
              <Chartone/>
            </DataContext.Provider>
          </Route>
          
          <Route path='/charttwo'>
            <DataContext.Provider value={powerData}>
              <Charttwo/>
            </DataContext.Provider>
          </Route>
          <Route path='/displayall'>
            <DataContext.Provider value={powerData}>
              <Displayall/>
            </DataContext.Provider>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
      {/* <DataContext.Provider value={powerData}>
          <Chartone/>
          <Charttwo/>
          <Drafttable/>
      </DataContext.Provider> */}
     </div>
  );
}

export default App;
