import { Delete } from '@mui/icons-material'
import { Divider, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    
            <div className='relative'>
                <div className="grid grid-cols-1 lg:grid-cols-[10%_90%] py-3">
                <div className='first_div w-[40px] h-[40px]'>
                  <img className=" rounded-full w-[40px] h-[40px] object-cover object-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0RFxPHJhMm3iLrqunwDiBRXdmhb3FNPOK-iagmIg1yLaCoKL1SyYhA4&s=10" alt="User"/>
                </div>
                <div className="second_div space-y-1">
                  <h1 className="font-semibold text-teal-600">sameera</h1>
                  <p className="text-gray-600 text-sm">2026.12.23</p>
                  <div>
                    <Rating readOnly value={4.5} precision={0.5}  />
                  </div>
                  <p className="text-gray-600 text-sm pb-2">this saree is very good and the quality is also good</p>
                  <div className="images flex gap-2 ">
                    {[1,1,1].map((item)=>
                      <img className=" w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] rounded-b-md object-cover object-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0RFxPHJhMm3iLrqunwDiBRXdmhb3FNPOK-iagmIg1yLaCoKL1SyYhA4&s=10" alt="User"/>
                )} 
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 z-50">
  <IconButton>
    <Delete sx={{ color: red[700] }} />
  </IconButton>
</div>
                <Divider className='py-3'/>
            </div> 
  )    

}

export default ReviewCard
