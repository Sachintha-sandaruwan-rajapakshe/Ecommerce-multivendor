import React from 'react'
import DrawerList from '../../component/DrawerList'
import { AccountBox, Add, Category, Dashboard, ElectricBolt, Home, IntegrationInstructions, LocalOffer, Logout } from '@mui/icons-material'

const AdminDrawerList = ({toggleDrower}:{toggleDrower:any}) => {

    const menu =[{
            name:"Dashboard",
            path:"/admin",
            icon:<Dashboard className='text-teal-600'/>,
            activeIcon:<Dashboard className='text-white'/>
        },
        {
            name:"Coupon",
            path:"/admin/coupon",
            icon:<IntegrationInstructions className='text-teal-600'/>,
            activeIcon:<IntegrationInstructions className='text-white'/>
        },
        {
            name:"Add coupon",
            path:"/admin/add-coupon",
            icon:<Add className='text-teal-600'/>,
            activeIcon:<Add className='text-white'/>
        },
        {
            name:"Home page",
            path:"/admin/home-grid",
            icon:<Home className='text-teal-600'/>,
            activeIcon:<Home className='text-white'/>
        },
        {
            name:"Electronic category",
            path:"/admin/electronics-category",
            icon:<ElectricBolt className='text-teal-600'/>,
            activeIcon:<ElectricBolt className='text-white'/>
        },
        {
            name:"Shop by Category",
            path:"/admin/shop-by-category",
            icon:<Category className='text-teal-600'/>,
            activeIcon:<Category className='text-white'/>
        },
        {
            name:"Deals",
            path:"/admin/deals",
            icon:<LocalOffer className='text-teal-600'/>,
            activeIcon:<LocalOffer className='text-white'/>
        }
    ];

    const menu2 = [
        {
            name:"Account",
            path:"/admin/account",
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
  return (
    <div>
      <DrawerList menu={menu} menu2 ={menu2} toggleDrower={toggleDrower}/>
    </div>
  )
}

export default AdminDrawerList
