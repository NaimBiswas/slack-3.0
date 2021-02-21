import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Components/Pages/Home';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path='/' exact>
                  <Home></Home>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
