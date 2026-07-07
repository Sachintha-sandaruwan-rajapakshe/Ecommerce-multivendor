import React, { useState } from 'react'
import SellerLoginForm from './SellerLoginForm';
import SellerAccountForm from './SellerAccountForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    
    const [youHaveAccount,setYouHaveAccount] = useState(false);

    const  handleShowPage=()=>{
        setYouHaveAccount(!youHaveAccount)
    }
  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
      <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md'>
            {youHaveAccount?<SellerLoginForm/>:<SellerAccountForm/>}
            <div className='mt-10 space-y-2'>
                <h1 className='text-center text-sm font-medium'>have account</h1>

                <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}} variant='outlined'>
                    {youHaveAccount?"Register":"Login"}
                </Button>
            </div>
      </section>
      <section className='hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>
        <div className='lg:w-[70%] px-5 space-y-10'> 
            <div className='space-y-2 font-bold text-center'>
                <p className=' text-2xl capitalize'> join the marketplace revolution</p>
                <p className='text-lg text-teal-600'>boost your sales today</p>
            </div>
            <img src="https://img.magnific.com/free-vector/hand-drawn-flat-design-sales-representative-illustration_23-2149347412.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>
      </section>
    </div>
  )
}

export default BecomeSeller
