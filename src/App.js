import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Chat from './Components/Chat';
import { ClimbingBoxLoader, } from 'react-spinners';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './Components/Login';

function App() {
   const [Loading, setLoading] = useState(false)
   const [user, loadin] = useAuthState(auth)
   useEffect(() => {

      setTimeout(() => {
         setLoading(true)
      }, 2000);

   }, [Loading])
   return (
      <div style={{ background: '#2A333F', minHeight: "100vh" }} className="App">
         {!Loading ? <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="">
            <ClimbingBoxLoader color={'#FF9E00'} loading={true} size={15} />
         </div> :
            <>
               {!user ?
                  <Login />
                  :
                  <>
                     <Header></Header>
                     <SideBar></SideBar>
                     <Router>
                        <Switch>
                           <Route path='/'>
                              <Chat></Chat>
                           </Route>
                        </Switch>
                     </Router>
                  </>
               }
            </>


         }
      </div>
   );
}

export default App;
