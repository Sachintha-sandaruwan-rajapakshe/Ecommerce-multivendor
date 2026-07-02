import { Add, Clear, Remove } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";

const CartItem = () => {
  const [changeNumber, setChangeNumber] = useState(1);

  return (
    <div className="relative w-full border border-gray-300 p-4 rounded-md bg-white mb-3">

      {/* DELETE BUTTON */}
      <div className="absolute top-2 right-2 opacity-70 hover:opacity-100">
        <IconButton size="small">
          <Clear />
        </IconButton>
      </div>

      {/* TOP */}
      <div className="grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-4 items-start">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded-md"
            src="https://static.wixstatic.com/media/ca64a6_113a94e17dfd4326a1f9430cb7164357~mv2.jpg"
            alt=""
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-1">

          <h1 className="text-base md:text-lg font-bold">
            Thilakawardana Textile
          </h1>

          <p className="text-xs md:text-sm text-gray-500">
            Orange And Brown Mustard Handloom Saree
          </p>

          <div className="text-xs md:text-sm text-gray-500 flex gap-2">
            <span>Sold by:</span>
            <span className="font-medium">Kapruka</span>
          </div>

          <div className="text-xs md:text-sm flex gap-2">
            <span className="text-teal-600 font-semibold">
              Replacement:
            </span>
            <span>Available</span>
          </div>

          <div className="text-xs md:text-sm text-gray-500 flex gap-2">
            <span>Quantity:</span>
            <span>{changeNumber}</span>
          </div>

        </div>
      </div>

      <Divider className="my-3" />

      {/* BOTTOM */}
      <div className="flex justify-between items-center">

        {/* QTY */}
        <div className="flex items-center gap-2 text-teal-600">

          <IconButton
            disabled={changeNumber <= 1}
            onClick={() => setChangeNumber(p => p - 1)}
            size="small"
          >
            <Remove />
          </IconButton>

          <p className="font-semibold">{changeNumber}</p>

          <IconButton
            onClick={() => setChangeNumber(p => p + 1)}
            size="small"
          >
            <Add />
          </IconButton>

        </div>

        {/* PRICE */}
        <div className="font-bold text-gray-700">
          Rs. 800
        </div>

      </div>

    </div>
  );
};

export default CartItem;