import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellerTable from '../admin/pages/SellerTable/SellerTable'
import Coupon from '../admin/pages/Coupon/Coupon'
import AddNewCouponForm from '../admin/pages/Coupon/AddNewCouponForm'
import GridTable from '../admin/pages/HomePage/GridTable'
import ElectronicTable from '../admin/pages/HomePage/ElectronicTable'
import ShopByCategory from '../admin/pages/HomePage/ShopByCategory'
import Deal from '../admin/pages/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SellerTable/>}/>
        <Route path='/coupon' element={<Coupon/>}/>
        <Route path='/add-coupon' element={<AddNewCouponForm/>}/>
        <Route path='/home-grid' element={<GridTable/>}/>
        <Route path='/electronics-category' element={<ElectronicTable/>}/>
        <Route path='/shop-by-category' element={<ShopByCategory/>}/>
        <Route path='/deals' element={<Deal/>}/>
    </Routes>
    </div>
  )
}

export default AdminRoutes
