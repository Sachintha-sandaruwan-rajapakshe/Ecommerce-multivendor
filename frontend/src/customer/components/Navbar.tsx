import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react'
import { FavoriteBorder, ShoppingCart, Storefront } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { Maincategory } from '../../Data/MainCategory';

const Navbar = () => {
    const theme = useTheme();
    const isLarge= useMediaQuery(theme.breakpoints.up('lg'));

    const [selectedCategory ,setSelectedCategory] = useState("men");
    const [showCategorySheet, setShowCategorySheet] = useState(false);
  return (
   <>
  <Box className="sticky top-0 z-50 bg-white">

    <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 h-[70px] border-b border-gray-200">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 md:gap-8">

        {/* MOBILE MENU */}
        {!isLarge && (
          <IconButton>
            <MenuIcon />
          </IconButton>
        )}

        {/* LOGO */}
        <h1 className="logo cursor-pointer text-lg md:text-2xl lg:text-3xl text-[#00927c]">
          Sachi Bazzar
        </h1>

        {/* CATEGORY MENU (ONLY DESKTOP) */}
        {isLarge && (
          <ul className="flex items-center font-medium text-gray-700 gap-5">
            {Maincategory.map((item) => (
              <li
                key={item.categoryId}
                onMouseEnter={() => {
                  setShowCategorySheet(true);
                  setSelectedCategory(item.categoryId);
                }}
                onMouseLeave={() => setShowCategorySheet(false)}
                className="hover:text-[#00927c] border-b-2 border-transparent hover:border-[#00927c] h-[70px] flex items-center cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6">

        <IconButton>
          <SearchIcon />
        </IconButton>

        {/* USER */}
        {true ? (
          <Button className="flex items-center gap-2">
            <Avatar
              sx={{ width: 28, height: 28 }}
              src="https://t4.ftcdn.net/jpg/03/76/47/81/360_F_376478182_yPuPo2qi6wGWR6gQ7QBBC8Isw.jpg"
            />
            <h1 className="font-semibold hidden md:block">
              sachin
            </h1>
          </Button>
        ) : (
          <Button variant="contained">
            <AccountCircleIcon />
            Login
          </Button>
        )}

        <IconButton>
          <FavoriteBorder sx={{ fontSize: 26 }} />
        </IconButton>

        <IconButton>
          <ShoppingCart sx={{ fontSize: 26 }} />
        </IconButton>

        {/* SELLER BUTTON (ONLY LARGE) */}
        {isLarge && (
          <Button startIcon={<Storefront />} variant="outlined">
            Become a Seller
          </Button>
        )}

      </div>
    </div>

    {/* CATEGORY SHEET */}
    {showCategorySheet && isLarge && (
      <div
        onMouseEnter={() => setShowCategorySheet(true)}
        onMouseLeave={() => setShowCategorySheet(false)}
        className="categorySheet absolute top-[70px] left-0 right-0 bg-white shadow-md"
      >
        <CategorySheet selectedCategory={selectedCategory} />
      </div>
    )}

  </Box>
</>
  )
}

export default Navbar
