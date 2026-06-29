import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { FavoriteBorder, ShoppingCart, Storefront } from '@mui/icons-material';

const Navbar = () => {
    const theme = useTheme();
    const isLarge= useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      <Box>
        <div className='flex justify-between items-center px-5 lg:px-20 h-[70px] border-b border-gray-200 '>
            <div className='flex gap-9'>
                <div className="flex items-center gap-2">
                    {!isLarge&&<IconButton>
                        <MenuIcon/>
                    </IconButton>}
                    <h1 className='logo curser-pointer text-lg md:text-2xl text-[#00927c]'>
                        Sachi Bazzar
                    </h1>
                </div>
                <ul className="flex items-center font-medium text-gray-700 gap-5">
                    {['men', 'women', 'home & furniture', 'electronics'].map((item) => (
                        <li className='mainCategory hover:text-[#00927c] hover:border-b-2 hover:border-[#00927c]' key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center lg:gap-6 gap-1'>
                <IconButton>
                    <SearchIcon/>
                </IconButton> 
                {
                    true?<Button className='flex items-center gap-2'>
                        <Avatar sx={{width:29,height:29}} src="https://t4.ftcdn.net/jpg/03/76/47/81/360_F_376478182_yPuPo2qi6rYcu9ilwGWR6gQ7QBBC8Isw.jpg"/>
                        <h1 className="font-semibold hidden md:block ">
                            sachin
                        </h1>
                    </Button>:<Button variant="contained"><AccountCircleIcon/>Login </Button>
                }
                <IconButton>
                    <FavoriteBorder sx={{width:29,height:29,fontSize:29}}/>
                </IconButton>
                <IconButton>
                    <ShoppingCart sx={{width:29,height:29,fontSize:29}}/>
                </IconButton>
                {isLarge&& <Button startIcon={<Storefront/>}  variant="outlined">
                    Become a Seller
                </Button> }        
            </div>
        </div>
      </Box>
    </>
  )
}

export default Navbar
