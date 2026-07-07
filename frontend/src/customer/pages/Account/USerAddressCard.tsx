import { Radio } from '@mui/material'
import React from 'react'

const USerAddressCard = () => {
    return (
        <div className='border border-gray-300 rounded-md'>
            <div className='grid grid-cols-2 grid-cols-[auto_1fr] p-2'>
                <div>
                    <Radio checked={true} onChange={true} value='' name='radio_button' />
                </div>
                <div className='pt-1 space-y-0.5 text-2xl'>
                    <h1 className='text-gray-500'>sachinth sandaruwan</h1>
                    <p className='text-gray-500 sm:text-xs lg:text-xl w-[80%] break-word whitespace-norma'>5/18 rikilla gaskada,mahanuwara </p>
                    <p className='text-gray-600 sm:text-xs md:text-md '><strong>Mobile :</strong> 0712446924</p>
                </div>
            </div>

        </div>
    )
}

export default USerAddressCard
