import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Component';
import Panier from './Component/Panier/Panier';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/*' element = {<HomePage/>} />
        <Route path = '/Panier' element = {<Panier/>} />
      </Routes>
    </div>
  );
}

export default App;
