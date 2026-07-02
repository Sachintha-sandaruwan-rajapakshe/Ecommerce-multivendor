
import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from './customer/components/Navbar'
import customeTheme from './Theme/customeTheme'
import Home from './customer/pages/Home/Home'
import Product from './customer/pages/Product/Product'
import Productdetails from './customer/pages/ProductDetails/Productdetails'
import Review from './customer/pages/Review/Review'
import Cart from './customer/pages/Cart/Cart'

export default function App() {
  return (
     <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          {/*<Home/>*/}
          {/*<Product/>*/}
          {/*<Productdetails/>*/}
          {/*<Review/> */}
          <Cart/>
          
        </div>
     </ThemeProvider>
     
    
  )
}
