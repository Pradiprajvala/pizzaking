import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./Pages/Home.js"
import LoginPage from "./Pages/LoginPage.js"
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/loginpage" element={<LoginPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default App;
