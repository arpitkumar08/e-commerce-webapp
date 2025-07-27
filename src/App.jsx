import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/AllPages/Home";
import ProdDetails from "./pages/UsersPages/ProdDetails";
import Auth from "./pages/AllPages/Auth";
import Cart from "./pages/UsersPages/Cart";
import Checkout from "./pages/UsersPages/Checkout";
import OrderSuccess from "./pages/UsersPages/OrderSuccess";

function App() {

  return (
    <>  
  <Router>
    <Routes>
      <Route path='/' element= {<Home />}></Route>
      <Route path='/prod-details' element= {<ProdDetails />}></Route>
      <Route path='/auth' element= {<Auth />}></Route>
      <Route path="/cart" element= {<Cart />}></Route>
      <Route path="/checkout" element= {<Checkout />}></Route>
      <Route path="/success" element= {<OrderSuccess />}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
