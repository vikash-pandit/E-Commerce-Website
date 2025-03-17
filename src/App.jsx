import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Orders from './pages/Orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7wh] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Orders' element={<Orders/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
