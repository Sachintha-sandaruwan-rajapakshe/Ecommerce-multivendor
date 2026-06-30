import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div>
        <h1 className="text-center text-5xl py-5 border-t border-gray-200 text-gray-500">Shop by Category</h1>

        <div className="flex gap-10 items-center justify-center flex-wrap  py-10 mx-auto">
      
      {[1,1,1,1,1,1,1].map((item)=>(<ShopByCategoryCard/>))}
    </div>
    </div>
    
  )
}

export default ShopByCategory
