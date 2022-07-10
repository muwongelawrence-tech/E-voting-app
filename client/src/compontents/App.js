import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Header from './Header';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// const Header = () => <h2>header</h2>
 const Dashboard = () => <h2>Dashboard...</h2>
 const  SurveyNew = () => <h2>SurveyNew</h2>
//const Landing = () => <div>Landing...</div>

//  <a href="http://localhost:5000/auth/google"> Sign In with Google </a> 
//  <a href="/auth/google"> Sign In with Google </a> 

function App() {
  // call to the useffect
  useEffect(() => {

  },[]);

  return (
    <div >
       <BrowserRouter>
           <div>
               <Header/>
                 <Switch>
                      <Route exact path ="/">
                        <Landing />
                      </Route>

                      <Route  path ="/dashboard">
                        <Dashboard/>
                      </Route>

                      <Route  path ="/surveys/new">
                        <SurveyNew/>
                      </Route>

                  </Switch>
      
           </div>
        </BrowserRouter>
      </div>
  );
}

export default App;


