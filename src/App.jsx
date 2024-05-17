import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import AiAssitant from "./components/AiBot/AiAssitant"

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/order' element={<PlaceOrder />} />
        </Routes>
        <AiAssitant />
      </div>
    </>
  )
}

export default App
