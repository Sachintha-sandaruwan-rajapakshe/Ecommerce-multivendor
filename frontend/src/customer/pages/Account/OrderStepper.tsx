import { CheckCircle, FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const steps = [
  { name: "Order Placed", description: "On Thu, 11 Jul", value: "PLACED" },
  { name: "Packed", description: "Packed on Fri, 12 Jul", value: "CONFIRM" },
  { name: "Shipped", description: "Shipped on Sat, 13 Jul", value: "SHIPPED" },
  { name: "Arriving", description: "Expected on Sun, 14 Jul", value: "ARRIVING" },
  { name: "Arrived", description: "Delivered on Mon, 15 Jul", value: "DELIVERED" }
];

const canceledStep = [
  { name: "Order Placed", description: "On Thu, 11 Jul", value: "PLACED" },
  { name: "Order Cancelled", description: "On Thu, 11 Jul", value: "CANCELLED" }
];

const OrderStepper = ({ orderStatus}:any) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  const activeIndex = statusStep.findIndex(
    (s) => s.value === orderStatus
  );

  return (
    <Box className="my-10">
      {statusStep.map((step, index) => (
        <div key={index} className="flex px-4">

          {/* LEFT ICON + LINE */}
          <div className="flex flex-col items-center">

            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10
              ${index <= activeIndex ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"}`}
            >
              {index <= activeIndex ? (
                <CheckCircle fontSize="small" />
              ) : (
                <FiberManualRecord fontSize="small" />
              )}
            </div>

            {index < statusStep.length - 1 && (
              <div
                className={`h-20 w-[2px]
                ${index < activeIndex ? "bg-teal-500" : "bg-gray-300"}`}
              />
            )}

          </div>

          {/* RIGHT CONTENT */}
          <div className="ml-3 w-full">

            <div
              className={`p-2 rounded-md
              ${step.value === orderStatus ? "bg-teal-600 text-white" : ""}`}
            >
              <p className="font-medium">{step.name}</p>

              <p
                className={`text-sm
                ${step.value === orderStatus ? "text-gray-100" : "text-gray-500"}`}
              >
                {step.description}
              </p>
            </div>

          </div>

        </div>
      ))}
    </Box>
  );
};

export default OrderStepper;