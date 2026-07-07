import { Close, Favorite, LocalOffer, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PricingCard = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='border border-gray-300 p-2'>
        <div className='grid gap-3'>
            

            <div className=' w-full space-y-2 rounded-md py-5 '>
                <div className='mx-4' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-400 '>Subtotal</h1>
                        <h1 className='text-gray-400 px-2'>Rs.200</h1>
                    </div>
                </div>

                <div className='mx-4' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-400 '>Discount</h1>
                        <h1 className='text-gray-400 px-2'>Rs.20</h1>
                    </div>
                </div>

                <div className='mx-4' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-400 '>Shipping</h1>
                        <h1 className='text-gray-400 px-2'>Rs.70</h1>
                    </div>
                </div>

                <div className='mx-4' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-400 '>Platform fee</h1>
                        <h1 className='text-gray-400 px-2'>Rs.free</h1>
                    </div>
                </div>
                <div>
                    <Divider/>
                </div>

                <div className='mx-4' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-400 '>total</h1>
                        <h1 className='text-gray-400 px-2'>Rs.1000</h1>
                    </div>
                </div>

                <div className="px-5">
                    <Button 
                        onClick={()=>navigate("/checkout")}
                        className="w-full"
                        variant="contained"
                    >
                        BUY NOW
                    </Button>
                </div>
            </div>
            <div className='w-full space-y-2 rounded-md py-5'>
                <div className='mx-4' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-400 '>Add from whishlist</h1>
                        <Favorite sx={{color:teal[200]}}/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </div>
    
  )
}

export default PricingCard
