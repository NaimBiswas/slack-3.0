import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Chat from './Components/Chat';

function App() {
   return (
      <div style={{ background: '#2A333F', minHeight: "100vh" }} className="App">
         <Header></Header>
         <SideBar></SideBar>
         <Router>
            <Switch>
               <Route path='/'>
                  <Chat></Chat>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
