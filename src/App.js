
import './App.css';
// import { Provider } from 'react-redux'
import Home from './Components/Home ';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import  RepoDetails from './Components/RepoDetails'


function App() {
  return (
    
    <Router>
    <div className="App">
   <Routes>
   <Route  path='/' element={<Home/>} >
    </Route>
    
    <Route path="/repo/:id" element = {<RepoDetails/>}>
           
          </Route>
    
   </Routes>
    </div>
    </Router>
   
  );
}

export default App;
