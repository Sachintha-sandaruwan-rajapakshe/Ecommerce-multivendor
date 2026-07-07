import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import { Formik } from 'formik';
import React, { useState } from 'react'

import * as Yup from "yup";
import TaxDetailsMobile from './components/TaxDetailsMobile';
import PickupAddress from './components/PickupAddress';
import BankDetails from './components/BankDetails';
import SupplierDetails from './components/SupplierDetails';



const steps = [
    'Tax Details & mobile',
    'Pikup Address',
    'Bank Details',
    'Suppler Details'
];





const SellerAccountForm = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }
    const mobileSchema = Yup.object({
        mobile: Yup.string()
            .required("Mobile is required")
            .matches(/^[0-9]+$/, "Invalid mobile number")
    });

    const schemas = [
        mobileSchema,    // index 3
    ];



    return (
        <Formik
            initialValues={{
                mobile: "",
                address: "",
                bankName: "",
                supplierName: ""
            }}
            validationSchema={schemas[activeStep]}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ isSubmitting, handleSubmit }) => (

                <form onSubmit={handleSubmit}>

                    <Box sx={{ width: "100%" }}>
                        <Stepper
                            activeStep={activeStep}
                            alternativeLabel
                        >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>


                    <div>

                        {activeStep === 0 && <TaxDetailsMobile />}

                        {activeStep === 1 && <PickupAddress />}

                        {activeStep === 2 && <BankDetails />}

                        {activeStep === 3 && <SupplierDetails />}

                    </div>


                    <div className="flex justify-between my-5">

                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            Back
                        </Button>



                        <Button
                            type={activeStep === steps.length  ? "submit" : "button"}
                            onClick={activeStep === steps.length  ? undefined : handleNext}
                            disabled={isSubmitting}
                        >
                            {
                                isSubmitting
                                    ? "Submitting..."
                                    : activeStep === steps.length 
                                        ? "Submit"
                                        : "Continue"
                            }
                        </Button>

                    </div>

                </form>

            )}
        </Formik>
    )

}

export default SellerAccountForm
