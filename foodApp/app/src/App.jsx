import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Menu from './Menu'
import CartPage from './CartPage'


function App() {
const [cartItems, setcartItems] = useState([])
const addToCart=(item)=>{
  const existingItem = cartItems.find((cartItem)=> cartItem.id === item.id) 

  if(existingItem){
    setcartItems(
        cartItems.map((cartItem)=> cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem)
    )
  }else{
    setcartItems([...cartItems,{...item,quantity:1}])
  }
}

  return (
    <>
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/cart" element = {<CartPage cartItems={cartItems} setCartItems={setcartItems} />}></Route>
        <Route path="/menu" element = {<Menu addToCart={addToCart} />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
