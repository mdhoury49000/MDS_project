import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Component';
import Panier from './Component/Panier/Panier';
import About from './Component/About/About';
import RegisterForm from './Component/Register/Register';
import CheckoutPage from './Component/Checkout/Checkout';
import LoginForm from './Component/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/*' element = {<About/>} />
        <Route path = '/Articles' element = {<HomePage/>} />
        <Route path = '/Panier' element = {<Panier/>} />
        <Route path = '/Register' element = {<RegisterForm/>} />
        <Route path = '/panier/paiement' element = {<CheckoutPage/>} />
        <Route path = '/Login' element = {<LoginForm/>} />
      </Routes>
    </div>
  );
}

export default App;
