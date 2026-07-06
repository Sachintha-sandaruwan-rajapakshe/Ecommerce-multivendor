import { OfflineBolt } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
    return (
        <div className="border border-gray-300 rounded-md space-y-2 p-2">


            <div className="flex items-start gap-2">
                <div>
                    <OfflineBolt sx={{ color: teal[600] }} />
                </div>

                <div>
                    <p className="uppercase text-teal-600 text-sm font-medium">
                        Shipped
                    </p>

                    <p className="text-gray-400 text-sm">
                        Arriving by Fri, Oct 04
                    </p>
                </div>
            </div>


            <div className="flex flex-col sm:flex-row bg-blue-50 rounded-md p-2 gap-3">


                <div className="flex justify-center sm:justify-start">
                    <img
                        className="w-20 h-20 object-cover"
                        src="https://static.vecteezy.com/system/resources/thumbnails/050/177/034/small/smart-watch-isolated-on-transparent-background-png.png"
                        alt=""
                    />
                </div>


                <div className="flex-1">
                    <p className="font-semibold">
                        Indian Saree
                    </p>

                    <p className="text-gray-400 text-sm break-words line-clamp-3">
                        Buy and sell pre-owned watches with Watchfinder & Co.
                        Over 3500 watches available from Rolex, Omega,
                        Breitling, TAG Heuer, Cartier and more. Shop now.
                    </p>

                    <p className="text-gray-400 text-sm">
                        <strong>Size:</strong> Free
                    </p>
                </div>

            </div>
        </div>
    )
}

export default OrderItem
