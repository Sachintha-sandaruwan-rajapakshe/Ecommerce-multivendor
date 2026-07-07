import React from 'react'
import USerAddressCard from './USerAddressCard'

const Address = () => {
    return (
        <div className='space-y-2'>
            {[1, 1, 1].map((item) => <div><USerAddressCard /></div>)}
        </div>
    )
}

export default Address
