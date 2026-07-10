
import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from './customer/components/Navbar'
import customeTheme from './Theme/customeTheme'
import Home from './customer/pages/Home/Home'
import Product from './customer/pages/Product/Product'
import Productdetails from './customer/pages/ProductDetails/Productdetails'
import Review from './customer/pages/Review/Review'
import Cart from './customer/pages/Cart/Cart'
import Checkout from './customer/pages/Checkout/Checkout'
import Account from './customer/pages/Account/Account'
import { Route, Routes } from 'react-router-dom'
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller'
import SellerDashBoard from './seller/pages/SellerDashBoard/SellerDashBoard'

export default function App() {
  return (
     <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/reviews/:productId' element={<Review/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<Productdetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/*' element={<Account/>}/>
            <Route path='/become-seller' element={<BecomeSeller/>}/>
            <Route path='/seller/*' element={<SellerDashBoard/>}/>
          </Routes>
          
        </div>
     </ThemeProvider>
     
    
  )
}
