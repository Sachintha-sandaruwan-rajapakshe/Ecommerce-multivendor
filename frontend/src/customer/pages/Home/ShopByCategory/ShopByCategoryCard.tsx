import React from 'react'

const ShopByCategoryCard = () => {
  return (
    <div className="flex flex-col gap-1 overflow-x-auto items-center justify-center group cursor-pointer flex-wrap">
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative border-t-amber-300 border-b-amber-300 border-6 border-amber-700">
        <img className="w-full h-full  object-cover group-hover:scale-110 transition-all duration-300 object-top "
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_360x.png?v=1645120210"
          alt=""></img>
      </div>
      <h1 className="text-lg font-semibold text-gray-800">Electronic</h1>
    </div>
  )
}

export default ShopByCategoryCard
