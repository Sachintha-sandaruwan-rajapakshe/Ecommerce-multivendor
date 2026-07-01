import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup
} from "@mui/material";

import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Colors } from "../Filter/Color";
import { price } from "../Filter/price";
import { discounts } from "../Filter/discount";
import { RadioButtonCheckedOutlined } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const FilterSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllPrice, setShowAllPrice] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const visibleColors = showAll ? Colors : Colors.slice(0, 5);
  const visiblePriceRanges = showAllPrice ? price: price.slice(0, 5);

  // get selected values
  const selectedColor = searchParams.get("color") || "";
  const selectedPrice = searchParams.get("price") || "";
  const selectedDiscount = searchParams.get("discount") || "";

  // update params
  const handleChange = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  };

  // clear all
  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="-z-50 space-y-5 bg-white">

      <div className="flex justify-between items-center my-5">
        <h1 className="text-lg font-semibold">
          Filter
        </h1>

        <Button
          size="small"
          variant="text"
          onClick={clearFilters}
        >
          Clear all
        </Button>
      </div>

      <Divider />

      {/* Color */}
      <section>
        <FormControl>

          <FormLabel
            sx={{
              fontSize: 16,
              color: teal[500],
              fontWeight: "bold",
              pb: 1
            }}
          >
            Color
          </FormLabel>

          <RadioGroup
            value={selectedColor}
            onChange={(e) =>
              handleChange(
                "color",
                e.target.value === selectedColor
                  ? ""
                  : e.target.value
              )
            }
          >
            {visibleColors.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.hex}
                control={<Radio />}
                label={
                  <div className="flex items-center gap-1">
                    {item.name}

                    <IconButton size="small">
                      <RadioButtonCheckedOutlined
                        sx={{
                          color: item.hex
                        }}
                      />
                    </IconButton>
                  </div>
                }
              />
            ))}
          </RadioGroup>

          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-teal-600 text-sm mt-2 text-left"
          >
            {showAll
              ? "Show less"
              : "Show more"}
          </button>

        </FormControl>
      </section>

      {/* Price */}
      <section>
        <FormControl>

          <FormLabel
            sx={{
              fontSize: 16,
              color: teal[500],
              fontWeight: "bold",
              pb: 1
            }}
          >
            Price
          </FormLabel>

          <RadioGroup
            value={selectedPrice}
            onChange={(e) =>
              handleChange(
                "price",
                e.target.value === selectedPrice
                  ? ""
                  : e.target.value
              )
            }
          >
            {visiblePriceRanges.map((item,index)=>(
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>

          <button
            type="button"
            onClick={() =>
              setShowAllPrice(!showAllPrice)
            }
            className="text-teal-600 text-sm mt-2 text-left"
          >
            {showAllPrice
              ? "Show less"
              : "Show more"}
          </button>

        </FormControl>
      </section>

      {/* Discount */}
      <section>
        <FormControl>

          <FormLabel
            sx={{
              fontSize: 16,
              color: teal[500],
              fontWeight: "bold",
              pb: 1
            }}
          >
            Discount
          </FormLabel>

          <RadioGroup
            value={selectedDiscount}
            onChange={(e) =>
              handleChange(
                "discount",
                e.target.value === selectedDiscount
                  ? ""
                  : e.target.value
              )
            }
          >
            {discounts.map((item,index)=>(
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>

        </FormControl>
      </section>

    </div>
  );
};

export default FilterSection;