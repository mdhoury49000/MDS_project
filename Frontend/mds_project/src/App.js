import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Pieces from './Component/Pieces/Pieces';
import About from './Component/About/About';
import Panier from './Component/Panier/Panier';
import Home from './Component/Home/Home';
import RegisterForm from './Component/Register/Register';
import CheckoutPage from './Component/Checkout/Checkout';
import LoginForm from './Component/Login/Login';
import Tarifs from './Component/Tarifs/Tarifs';
import Artistes from './Component/Artistes/Artistes';
import Inspirations from './Component/Inspirations/Inspirations';
import Contact from './Component/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/*' element = {<Home/>} />
        <Route path = '/Pieces' element = {<Pieces/>} />
        <Route path = '/Qui-sommes-nous' element = {<About/>} />
        <Route path = '/Panier' element = {<Panier/>} />
        <Route path = '/Register' element = {<RegisterForm/>} />
        <Route path = '/panier/paiement' element = {<CheckoutPage/>} />
        <Route path = '/Login' element = {<LoginForm/>} />
        <Route path = '/Tarifs' element = {<Tarifs/>} />
        <Route path = '/Artistes' element = {<Artistes/>} />
        <Route path = '/Inspirations' element = {<Inspirations/>} />
        <Route path = '/Contact' element = {<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
