import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';

const Header = () => <h2>header</h2>
const Dashboard = () => <h2>header</h2>
const  SurveyNew = () => <h2>header</h2>
//const Landing = () => <div>Landing...</div>

function App() {
  return (
    <div >
       <BrowserRouter>
           <Routes>
               <Route path ="/landing" component = { Landing } />
             </Routes>
            
        </BrowserRouter>
       {/* <a href="http://localhost:5000/auth/google"> Sign In with Google </a> */}
        {/* <a href="/auth/google"> Sign In with Google </a> */}
      </div>
  );
}

export default App;
