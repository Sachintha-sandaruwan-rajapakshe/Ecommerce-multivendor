import React from 'react'
import PaymentTable from './PaymentTable'
import { Button, Divider } from '@mui/material'

const Payment = () => {
    return (
        <div className='space-y-5'>
            <div className='text-xl space-y-5 w-[40%] border border-gray-300 text-gray-400 pl-2  '>
                <h1 className='py-2'>Total Earning</h1>
                <p className='text-gray-600'>Rs.1500</p>
                <Divider />
                <p className='py-2'><strong>Last Payment</strong>Rs.00</p>
            </div>
            <div className='py-5'>
                <Button variant='contained' size='large'>
                    Transaction
                </Button>
            </div>

            <PaymentTable />
        </div>
    )
}

export default Payment
