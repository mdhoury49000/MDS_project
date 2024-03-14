import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import BaseRouter from './Router/BaseRouter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<BaseRouter/>} />
      </Routes>
    </div>
  );
}

export default App;
