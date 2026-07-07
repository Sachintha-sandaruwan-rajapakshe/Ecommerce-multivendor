import { Divider } from '@mui/material'
import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Orders from './Orders'
import OrderDetails from './OrderDetails'
import UserDetails from './UserDetails'
import Address from './Address'

const menu = [
  { name: "Orders", path: "/account/orders" },
  { name: "Profile", path: "/account/" },
  { name: "Saved card", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
]

const Account = () => {
  const navigate = useNavigate();

  const handelClick = (item: any) => {
    navigate(item.path)
  }
  const location = useLocation();
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-52 min-h-screen mt-10">

      <div>
        <h1 className="font-semibold text-lg pb-5">
          Saman
        </h1>
      </div>

      <Divider />

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">

        {/* Sidebar */}
        <section className="py-5 lg:pr-5 ">

          {menu.map((item) => (
            <div
              key={item.name}
              onClick={() => handelClick(item)}
              className={`
            ${item.path === location.pathname
                  ? "bg-teal-600 text-white "
                  : ""
                }
            py-3 px-5 cursor-pointer 
            hover:bg-teal-600 hover:text-white
            rounded-md transition flex 
          `}
            >
              <p>{item.name}</p>
            </div>
          ))}

        </section>

        {/* Main Content */}
        <section className="col-span-1 lg:col-span-2 lg:border-l border-gray-300 py-5 lg:pl-5">

          <Routes>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/order/:orderId/:orderItemId' element={<OrderDetails/>}/>
            <Route path='/' element={<UserDetails/>}/>
            <Route path='/addresses' element={<Address/>}/>
            <Route path='/saved-card' element={<Address/>}/>

          </Routes>
        </section>

      </div>

    </div>
  )
}

export default Account
