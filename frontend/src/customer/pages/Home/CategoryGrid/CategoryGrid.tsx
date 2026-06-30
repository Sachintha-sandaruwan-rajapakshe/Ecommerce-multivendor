import React from 'react'

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 lg:h-[600px] px-5 lg:px-20 gap-4">
      <div className="col-span-3 row-span-12 text-white  h-full">
        <img className="w-full h-full object-cover object-top rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4PtUvC5eoqCN2zlQhAdmCzPkEYnGqq3yGtxXq3dXSnNl0D6wEtW68AE&s=10" alt="" />
      </div>
      <div className="col-span-2 row-span-6  h-full">
        <img className="w-full h-full object-cover object-top rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8TuPSACAO-Arms7jUUvGQcFbtWA_najysLZxQQ44Wg&s" alt="" />
      </div>
      <div className="col-span-4 row-span-6  h-full">
        <img className="w-full h-full object-cover object-top rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8TuPSACAO-Arms7jUUvGQcFbtWA_najysLZxQQ44Wg&s" alt="" />
      </div>
      <div className="col-span-3 row-span-12 h-full">
        <img className="w-full h-full object-cover object-top rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4PtUvC5eoqCN2zlQhAdmCzPkEYnGqq3yGtxXq3dXSnNl0D6wEtW68AE&s=10" alt="" />
      </div>
      <div className="col-span-4 row-span-6 h-full">
        <img className="w-full h-full object-cover object-top rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4PtUvC5eoqCN2zlQhAdmCzPkEYnGqq3yGtxXq3dXSnNl0D6wEtW68AE&s=10" alt="" />
      </div>
      <div className="col-span-2 row-span-6 h-full">
        <img className="w-full h-full object-cover object-top rounded-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4PtUvC5eoqCN2zlQhAdmCzPkEYnGqq3yGtxXq3dXSnNl0D6wEtW68AE&s=10" alt="" />
      </div>
    </div>
  )
}

export default CategoryGrid
