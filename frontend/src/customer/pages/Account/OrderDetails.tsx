import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";

const OrderDetails = () => {
    const navigate = useNavigate();

    return (
        <Box className="space-y-5">

            <section className="flex flex-col gap-5 justify-center items-center text-center">

                <img
                    className="w-24 h-24 object-cover"
                    src="https://static.vecteezy.com/system/resources/thumbnails/050/177/034/small/smart-watch-isolated-on-transparent-background-png.png"
                    alt="Product"
                />

                <div className="text-sm space-y-2">
                    <h1 className="font-bold">
                        Virani Clothing
                    </h1>

                    <p className="text-gray-400">
                        Title of the item
                    </p>

                    <p className="capitalize">
                        <strong>Size:</strong> M
                    </p>
                </div>

                <Button
                    variant="contained"
                    onClick={() => navigate(`/reviews/${5}/create`)}
                >
                    Write Review
                </Button>

            </section>

            <section className="border border-gray-300 p-4 rounded-md">
                <OrderStepper orderStatus="SHIPPED" />
            </section>

        </Box>
    );
};

export default OrderDetails;