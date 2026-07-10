import React from 'react'
import { Routes, Route } from "react-router-dom";
import AddProduct from '../seller/pages/Products/AddProduct'
import Profile from '../seller/pages/Account/Profile'
import Products from '../seller/pages/Products/Products'
import Dashboard from '../seller/pages/SellerDashBoard/Dashboard';
import Transaction from '../seller/pages/Transacrion/Transaction';
import Orders from '../seller/pages/Order/Orders';
import Payment from '../seller/pages/Payment/Payment';

const SellerRoutes = () => {
  return (
   <div>
     <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/account' element={<Profile/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
    </Routes>
   </div>
  )
}

export default SellerRoutes
