import './App.css';
import React from "react";
import Header from './components/header/Header';
import NavBar from './components/NavBar/NavBar';
import {  
  Route,
  Redirect,
} from "react-router-dom";
import ProfileContainer from './components/Prifile/ProfileContainer';
import MassagesContainer from './components/Massages/MassagesContainer';
import FrendsContainer from './components/Friends/FrendsContainer';
import NewsContainer from './components/news/NewsContainer';



const App = ()=>{
  return(
    
        <div className="gread">
            <Header/>
            <NavBar/>
            <div className="content">
                 <Route path='/profile' ><ProfileContainer/>
                 </Route>
                 <Route path='/massages'><MassagesContainer />
                  </Route>
                  <Route path='/friends'><FrendsContainer />
                  </Route>
                  <Route path='/news'><NewsContainer />
                  </Route>
                 <Redirect from='/' to='/profile'/>
            </div>
        </div>     
     
  )
}
export default App;