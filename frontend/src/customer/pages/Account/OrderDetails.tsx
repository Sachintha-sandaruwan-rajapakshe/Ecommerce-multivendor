import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payment } from "@mui/icons-material";

const OrderDetails = () => {
    const navigate = useNavigate();

    const orderStatus="CANCELLED"

    const handleCancelOrder=()=>{
        
    }

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

            <section>
                <div className="border border-gray-300 p-5">
                    <h1 className="font-bold pb-3"> Dilivary Address</h1>
                    <div className="text-sm space-y-2">
                        <div className="flex gap-5 font-medium">
                            <p>saman niwasa</p>
                            <Divider flexItem  orientation="vertical"/>
                            <p>0712446924</p>
                        </div>
                        <p>
                            shipping address,city,state-pincode
                        </p>
                    </div>

                </div>

                <div className="border border-gray-300">
                    <div className="flex justify-between text-sm pt-5 px-5">
                        <div className="space-y-1">
                            <p className="font-bold">total item price</p>
                            <p>you saved <span className="text-green-600 font-medium text=xl"> Rs.500.00</span>on this item</p>
                        </div>
                        <p className="font-medium">Rs. 400.00</p>

                    </div>
                    <div className="p-5">
                        <div className="bg-teal-50 px-5 py-2 text-sx font-medium flex items-center gap-3">
                            <Payment/>
                            <p>Pay on delivary</p>
                        </div>
                    </div>
                </div>
                <Divider/>
                <div className="px-5 py-5 ">
                    <p className="text-xs font-semibold text-gray-500"><strong>Sold by : </strong> saree,thilakawardana</p>
                </div>

                <div className="p-10">
                    <Button disabled={orderStatus==="CANCELLED"} onClick={handleCancelOrder}  sx={{py:"0.7rem"}} variant="contained" fullWidth className={orderStatus=="CANCELLED"?"!bg-red-400 !text-white" :"!bg-red-500 !text-white"}>
                        {orderStatus==="CANCELLED"?"order canceld":"cancel order"}
                    </Button>
                </div>
            </section>

        </Box>
    );
};

export default OrderDetails;