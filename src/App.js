
import './App.css';
// import { Provider } from 'react-redux'
import Home from './Components/Home ';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <div className="App">
   <Routes>
   <Route  path='/' element={<Home/>} >
    </Route>
   </Routes>
    </div>
    </Router>
   
  );
}

export default App;
