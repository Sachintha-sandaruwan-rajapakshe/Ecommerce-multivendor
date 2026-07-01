import React, { useState } from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, useMediaQuery, useTheme, type SelectChangeEvent } from '@mui/material'
import { FilterAlt } from '@mui/icons-material'

const Product = () => {

  const[page,setPage]=useState(1);
  const [short, setShort] = React.useState('');

  const handleShortChange = (event: SelectChangeEvent) => {
    setShort(event.target.value);
  };

  const handlePageChange = ( value: number) => {
    setPage(value);
    console.log("Page changed to:", value);
  }

  const theme =useTheme();
  const isLarge =useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div className='-z-10 mt-10'>
      <div>
        <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>Men T-shirt</h1>
      </div>
      <div className='lg:flex mx-20'>
        <section className='filter_section lg:w-[20%] h-full hidden lg:block '>
          <FilterSection/>
        </section>
        <div className=' lg:w-[80%] h-full space-y-5'>
          <div className='flex justify-between'>
            <div className='relative'>
                {!isLarge&& 
                  <IconButton>
                      <FilterAlt/>
                  </IconButton>
                }
                {!isLarge&& 
                  <Box>
                      <FilterSection/>
                  </Box>
                }
            </div>
              <FormControl size="small" sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-autowidth-label">short</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={short}
                  onChange={handleShortChange}
                  autoWidth
                  label="short"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"price_low"}>Price : Low - High</MenuItem>
                  <MenuItem value={"price_high"}>Price : High - Low</MenuItem>
                </Select>
              </FormControl>
          </div>

            <Divider/>

          <section className='Product_section flex flex-wrap m-2 '>
            
            {[1,1,1,1,1,1].map((item)=><ProductCard/>)}
          </section>
          <div className='place-items-center py-20'>
             <Pagination  onChange={(event, value)=>{handlePageChange( value)}} count={10} />
          </div>
         
        </div>
      </div>
      
    </div>
  )
}

export default Product
