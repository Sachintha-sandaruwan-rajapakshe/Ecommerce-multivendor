import { Box, Button, Grid, TextField } from '@mui/material'
import { useFormik } from "formik";
import * as Yup from "yup";
import React from 'react'

const AddressForm = () => {

    const validationSchema = Yup.object().shape({

        name: Yup.string()
            .min(3, "Name must have at least 3 characters")
            .max(50, "Name too long")
            .required("Name is required"),

        mobile: Yup.string()
            .matches(/^[0-9]{10}$/, "Mobile number must contain 10 digits")
            .required("Mobile is required"),

        pinCode: Yup.string()
            .matches(/^[0-9]{5,6}$/, "Pincode must contain 5-6 digits")
            .required("Pincode is required"),

        address: Yup.string()
            .min(10, "Address is too short")
            .max(200, "Address is too long")
            .required("Address is required"),

        locality: Yup.string()
            .min(3, "Locality is too short")
            .required("Locality is required"),

        city: Yup.string()
            .matches(/^[A-Za-z\s]+$/, "City should contain letters only")
            .required("City is required"),

        state: Yup.string()
            .matches(/^[A-Za-z\s]+$/, "State should contain letters only")
            .required("State is required"),
    });

    const formik =useFormik({
        initialValues:{
            name:"",
            mobile:"",
            pinCode:"",
            address:"",
            locality:"",
            city:"",
            state:"",
        },
        validationSchema,
        onSubmit: (values) => {
      console.log("Submitted name:", values.state);
    },
    })
  return (
    <Box>
        <p className='text-xl font-bold text-center pb-5'>Contact details</p>
        <form action="" onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TextField 
                        name="name"
                        fullWidth 
                        size='small' 
                        label="name" 
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name&&Boolean(formik.errors.name)}
                        helperText={formik.touched.name&&formik.errors.name}
                    />
                </Grid>
                <Grid size={6}>
                     <TextField 
                        name="mobile"
                        fullWidth 
                        size='small' 
                        label="mobile" 
                        value={formik.values.mobile}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.mobile&&Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile&&formik.errors.mobile}
                    />
                </Grid>
                <Grid size={6}>
                    <TextField 
                        name="pinCode"
                        fullWidth 
                        size='small' 
                        label="pinCode" 
                        value={formik.values.pinCode}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.pinCode&&Boolean(formik.errors.pinCode)}
                        helperText={formik.touched.pinCode&&formik.errors.pinCode}
                    />  
                </Grid>
                <Grid size={12}>
                    <TextField 
                        name="address"
                        fullWidth 
                        size='small' 
                        label="address(House No,Building,Street)" 
                        value={formik.values.address}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.address&&Boolean(formik.errors.address)}
                        helperText={formik.touched.address&&formik.errors.address}
                    />    
                </Grid>
                <Grid size={12}>
                    <TextField 
                        name="locality"
                        fullWidth 
                        size='small' 
                        label="locality" 
                        value={formik.values.locality}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.locality&&Boolean(formik.errors.locality)}
                        helperText={formik.touched.locality&&formik.errors.locality}
                    />
                </Grid>
                <Grid size={6}>
                    <TextField 
                        name="city"
                        fullWidth 
                        size='small' 
                        label="city" 
                        value={formik.values.city}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.city&&Boolean(formik.errors.city)}
                        helperText={formik.touched.city&&formik.errors.city}
                    /> 
                </Grid>
                <Grid size={6}>
                    <TextField 
                        name="state"
                        fullWidth 
                        size='small' 
                        label="state" 
                        value={formik.values.state}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.state&&Boolean(formik.errors.state)}
                        helperText={formik.touched.state&&formik.errors.state}
                    />
                </Grid>
                <Grid size={12}>
                    <Button fullWidth size='medium' variant='contained' type="submit">Add Address</Button>
                </Grid>
            </Grid>
        </form>

    </Box>
  )
}

export default AddressForm
