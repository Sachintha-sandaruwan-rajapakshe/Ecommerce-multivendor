import React from 'react'
import { menLevalTwo } from '../../Data/LevalTwo/menLevalTwo'
import { womenLevelTwo } from '../../Data/LevalTwo/womenLevelTwo'
import { funitureLevelTwo } from '../../Data/LevalTwo/funitureLevalTwo'
import { electronicsLevelTwo } from '../../Data/LevalTwo/electronicLevalTwo'
import { menLevelThree } from '../../Data/LevalThree/menLevelThree'
import { womenLevelThree } from '../../Data/LevalThree/womenLevelThree'
import { furnitureLevelThree } from '../../Data/LevalThree/funitureLevelThree'
import { electronicsLevelThree } from '../../Data/LevalThree/electronicsLevelThree'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const categoryTwo:{[key:string]:any[]}={
    men:menLevalTwo,
    women:womenLevelTwo,
    home_furniture:funitureLevelTwo,
    electronics:electronicsLevelTwo,
}
const categoryThree:{[key:string]:any[]}={
    men:menLevelThree,
    women:womenLevelThree,
    home_furniture:furnitureLevelThree,
    electronics:electronicsLevelThree,
}

const CategorySheet = ({selectedCategory,setShowSheet}:any) => {
    const navigate = useNavigate();
    const childCategory =(category:any,parentCategoryId:any)=>{
        return category.filter((child:any)=>child.parentCategoryId==parentCategoryId)
    }

  return (
    <Box className=" shadow-lg lg:h-[300px] overflow-y-auto">
        <div className='flex text-sm flex-wrap gap-1'>
            {
                categoryTwo[selectedCategory].map((item:any,index)=>
                <div className={`lg:w-[20%] ${index%2===0?" border-amber-50 bg-amber-50/70":" border-amber-50 bg-blue-50/70"}`}>
                    <p className="text-emerald-700 mb-5 font-semibold mx-5">{item.name}</p>
                
                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectedCategory],item.categoryId).map((item:any)=><div><li onClick={()=>navigate("/products/"+item.categoryId)} className='cursor-pointer hover:text-emerald-700 hover:underline hover:scale-110 mx-5'>{item.name}</li></div>)}
                        
                    </ul>
                </div>)

            }
        </div>

    </Box>
  )
}

export default CategorySheet
