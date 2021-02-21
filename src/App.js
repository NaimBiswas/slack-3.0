import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
   return (
      <div style={{ background: '#2A333F' }} className="App">
         <Header></Header>
         <SideBar></SideBar>
         <Router>
            <Switch>
               <Route path='/'>

               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
