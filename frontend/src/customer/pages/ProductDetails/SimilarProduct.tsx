import React from 'react'
import SimilarProductCard from './SimilarProductCard'

const SimilarProduct = () => {
  return (
    <div className='ml-8 flex flex-wrap'>
        {[1,1,1,1,1,1].map((item)=> <SimilarProductCard />)}
      
    </div>
  )
}

export default SimilarProduct
