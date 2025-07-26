import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/AllPages/Home";
import ProdDetails from "./pages/UsersPages/ProdDetails";
import Auth from "./pages/AllPages/Auth";

function App() {

  return (
    <>  
  <Router>
    <Routes>
      <Route path='/' element= {<Home />}></Route>
      <Route path='/prod-details' element= {<ProdDetails />}></Route>
      <Route path='/auth' element= {<Auth />}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
