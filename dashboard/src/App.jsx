import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Addproduct from './Addproduct'
import ProductsItem from './ProductPage'
import Update from './Update'
import Navbar from './Navbar'
import ProfilePage from './ProfilePage'
import Customer from './Customer'
import CancelOrder from './CancelOrder'
import ViewOrder from './ViewOrder'
import Settings from './Settings'
import LogoutPage from './LogOutPage'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addproduct' element={<Addproduct/>} />
      <Route path='/productsitem' element={<ProductsItem/>} />
      <Route path='/update' element={<Update/>} />
      <Route path='/profilepage' element={<ProfilePage/>} />
      <Route path='/customer' element={<Customer/>} />
      <Route path='/cancelorder' element={<CancelOrder/>} />
      <Route path='/vieworder' element={<ViewOrder/>} />
      <Route path='/settings' element={<Settings/>} /> 
      <Route path='/logout' element={<LogoutPage/>} /> 
    </Routes>
    
    </>
  )
}

export default App
