import React from 'react'

const DealCard = () => {
  return (
    <div className="w-[15rem] cursor-pointer text-center text-white">
      <img
        className="w-full h-[12rem] object-cover border-x-4 border-t-4 border-fuchsia-400 object-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01UKveMIs4t8rAFH8j64RcDGuVca7b120Kk5KPcEdtQ&s=10"
        alt="deal"
      />

      <div className="bg-black/70 border-2">
        <p className="text-lg font-semibold">Saree Special Deal!</p>
        <p className="text-lg font-semibold">Get 50% off on all sarees</p>
        <p className="text-lg font-semibold">Shop Now</p>
      </div>
    </div>
  )
}

export default DealCard