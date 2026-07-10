import { AccountBalance, AccountBox, Add, Dashboard, Inventory, Logout, Receipt, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import DrawerList from '../../../component/DrawerList';

const menu = [
    {
        name:"Dashboard",
        path:"/seller",
        icon:<Dashboard className='text-teal-600'/>,
        activeIcon:<Dashboard className='text-white'/>
    },
    {
        name:"Orders",
        path:"/seller/orders",
        icon:<ShoppingBag className='text-teal-600'/>,
        activeIcon:<ShoppingBag className='text-white'/>
    },
    {
        name:"Products",
        path:"/seller/products",
        icon:<Inventory className='text-teal-600'/>,
        activeIcon:<Inventory className='text-white'/>
    },
    {
        name:"Add product",
        path:"/seller/add-product",
        icon:<Add className='text-teal-600'/>,
        activeIcon:<Add className='text-white'/>
    },
    {
        name:"Payment",
        path:"/seller/payment",
        icon:<AccountBalance className='text-teal-600'/>,
        activeIcon:<AccountBalance className='text-white'/>
    },
    {
        name:"Tranaction",
        path:"/seller/transaction",
        icon:<Receipt className='text-teal-600'/>,
        activeIcon:<Receipt className='text-white'/>
    }
];

const menu2 = [
    {
        name:"Account",
        path:"/seller/account",
        icon:<AccountBox className='text-teal-600'/>,
        activeIcon:<AccountBox className='text-white'/>
    },
    {
        name:"Logout",
        path:"/",
        icon:<Logout className='text-teal-600'/>,
        activeIcon:<Logout className='text-white'/>
    }
];

const SellerDrawerList = ({toggleDrower}:{toggleDrower:any}) => {
  return (
    
    <DrawerList menu={menu} menu2 ={menu2} toggleDrower={toggleDrower}/>
    
  )
}

export default SellerDrawerList
