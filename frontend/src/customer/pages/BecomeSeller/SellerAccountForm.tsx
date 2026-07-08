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
    const taxDetailsMobileSchema = Yup.object({
        mobile: Yup.string()
            .required("Mobile number is required")
            .matches(
                /^(?:\+94|0)(70|71|72|74|75|76|77|78)\d{7}$/,
                "Enter a valid Sri Lankan mobile number"
            ),
        gstNumber: Yup.string()
            .required("GSTIN number is required")
            .matches(
                /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                "Enter a valid GSTIN number"
            )

    });

    const pickupAddressSchema = Yup.object({
        name: Yup.string()
            .required("Name is required"),

        locality: Yup.string()
            .required("Locality is required"),

        address: Yup.string()
            .required("Address is required"),

        city: Yup.string()
            .required("City is required"),

        state: Yup.string()
            .required("State is required"),

        pinCode: Yup.string()
            .required("Pin code is required")
            .matches(/^[0-9]{5,6}$/, "Enter a valid pin code"),

        mobileNum: Yup.string()
            .required("Mobile number is required")
            .matches(
                /^[0-9]{10}$/,
                "Enter a valid mobile number"
            ),
    });

    const BankDetailsSchema = Yup.object({
        accoutNumber: Yup.string()
            .required("Account number is required")
            .matches(
                /^[0-9]+$/,
                "Account number must contain only numbers"
            ),

        accoutHolderName: Yup.string()
            .required("Account holder name is required"),

        ifscCode: Yup.string()
            .required("IFSC code is required")
            .matches(
                /^[A-Z]{4}0[A-Z0-9]{6}$/,
                "Enter a valid IFSC code"
            ),
    });

    const SupplierDetailsSchema = Yup.object({

        businessName: Yup.string()
            .required("Business name is required"),

        businessEmail: Yup.string()
            .email("Enter a valid business email")
            .required("Business email is required"),

        businessMobile: Yup.string()
            .required("Business mobile number is required")
            .matches(
                /^(?:\+94|0)(70|71|72|74|75|76|77|78)\d{7}$/,
                "Enter a valid mobile number"
            ),

        businessAddress: Yup.string()
            .required("Business address is required"),

        logo: Yup.mixed()
            .required("Logo is required"),

        banner: Yup.mixed()
            .required("Banner is required"),


        // ඔයාගේ කලින් fields
        sellerName: Yup.string()
            .required("Seller name is required"),

        email: Yup.string()
            .email("Enter a valid email")
            .required("Email is required"),

        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),

    });

    const schemas = [
        taxDetailsMobileSchema,
        pickupAddressSchema,
        BankDetailsSchema,
        SupplierDetailsSchema,
    ];



    return (
        <Formik
            initialValues={{
                mobile: "",
                GSTIN: "",

                pickupAddress: {
                    name: "",
                    locality: "",
                    address: "",
                    city: "",
                    state: "",
                    pinCode: "",
                    mobileNum: "",
                },
                bankDetails: {
                    accoutNumber: "",
                    accoutHolderName: "",
                    ifscCode: "",
                },
                businessDetails: {
                    businessName: "",
                    businessEmail: "",
                    businessMobile: "",
                    businessAddress: "",
                    logo: "",
                    banner: "",

                },
                sellerName: "",
                email: "",
                password: "",
            }}
            validationSchema={schemas[activeStep]}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik: any) => (

                <form onSubmit={formik.handleSubmit}>

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

                        {activeStep === 0 && <TaxDetailsMobile formik={formik} />}

                        {activeStep === 1 && <PickupAddress formik={formik} />}

                        {activeStep === 2 && <BankDetails formik={formik} />}

                        {activeStep === 3 && <SupplierDetails formik={formik} />}

                    </div>


                    <div className="flex justify-between my-5">

                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            Back
                        </Button>



                        <Button
                            type={activeStep === steps.length ? "submit" : "button"}
                            onClick={activeStep === steps.length ? undefined : handleNext}
                            disabled={formik.isSubmitting}
                        >
                            {
                                formik.isSubmitting
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
