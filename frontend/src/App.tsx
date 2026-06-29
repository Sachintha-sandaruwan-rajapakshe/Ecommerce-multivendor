
import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from './customer/components/Navbar'
import customeTheme from './Theme/customeTheme'
import Home from './customer/pages/Home/Home'

export default function App() {
  return (
     <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          <Home/>
        </div>
     </ThemeProvider>
     
    
  )
}
