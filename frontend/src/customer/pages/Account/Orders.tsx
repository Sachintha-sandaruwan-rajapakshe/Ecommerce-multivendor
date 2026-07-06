import React from 'react'
import OrderItem from './OrderItem'

const Orders = () => {
    return (
        <div className='text-ms min-h-screen'>
            <div className='pb-5'>
                <h1 className='font-semibold'>All Orders</h1>
                <p className='text-gray-500'>from anytime
                </p>
            </div>
            <div className='space-y-2'>
                {[1, 1, 1, 1].map((item) => <OrderItem />)}

            </div>
        </div>
    )
}

export default Orders
