import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path='/' exact>
                  <h2>Slack Version:👉3.0</h2>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
