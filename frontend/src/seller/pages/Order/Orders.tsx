import React from 'react'
import OrderTable from './OrderTable'

const Orders = () => {
  return (
    <div>
        <h1 className='text-xl font-bold text-gray-400 py-5 pl-2'>All orders</h1>
      <OrderTable/>
    </div>
  )
}

export default Orders
