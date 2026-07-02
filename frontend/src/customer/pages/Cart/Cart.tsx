import React, { useState } from 'react'
import CartItem from './CartItem'
import PricingCard from './PricingCard'
import { Button } from '@mui/material'

const Cart = () => {
    const [open, setOpen] = useState(false);
    const cartItem=[1,1,1,1,1];
    const actoive = open?cartItem:cartItem.slice(0,2);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[60%_30%] lg:gap-10 px-5 lg:px-20 pt-2 lg:pt-5">

        {/* LEFT CART */}
        <div className='lg:ml-20'>
            {actoive.map((item)=><div><CartItem /> </div>)}

            <div>
                <Button variant='text' onClick={()=>setOpen(!open)}>{open?"Hide":"View All"}</Button>
            </div>
            
        </div>

        {/* RIGHT PRICING */}
        <div className="lg:sticky lg:top-20 h-fit">
            <PricingCard />
        </div>

        </div>
    </div>
  )
}

export default Cart
