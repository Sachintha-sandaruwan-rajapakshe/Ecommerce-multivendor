import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const SupplierDetails = ({formik}:any) => {
  return (
    <Box>

      <h1 className="text-xl mb-8">
        Supplier Details
      </h1>


      <div className="flex flex-col gap-5">


        {/* Business Name */}
        <TextField
          fullWidth
          name="businessName"
          label="Business Name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.businessName &&
            Boolean(formik.errors.businessName)
          }
          helperText={
            formik.touched.businessName &&
            formik.errors.businessName
          }
        />


        {/* Business Email */}
        <TextField
          fullWidth
          name="businessEmail"
          label="Business Email"
          type="email"
          value={formik.values.businessEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.businessEmail &&
            Boolean(formik.errors.businessEmail)
          }
          helperText={
            formik.touched.businessEmail &&
            formik.errors.businessEmail
          }
        />


        {/* Business Mobile */}
        <TextField
          fullWidth
          name="businessMobile"
          label="Business Mobile"
          value={formik.values.businessMobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.businessMobile &&
            Boolean(formik.errors.businessMobile)
          }
          helperText={
            formik.touched.businessMobile &&
            formik.errors.businessMobile
          }
        />


        {/* Business Address */}
        <TextField
          fullWidth
          multiline
          rows={3}
          name="businessAddress"
          label="Business Address"
          value={formik.values.businessAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.businessAddress &&
            Boolean(formik.errors.businessAddress)
          }
          helperText={
            formik.touched.businessAddress &&
            formik.errors.businessAddress
          }
        />


        {/* Seller Name */}
        <TextField
          fullWidth
          name="sellerName"
          label="Seller Name"
          value={formik.values.sellerName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.sellerName &&
            Boolean(formik.errors.sellerName)
          }
          helperText={
            formik.touched.sellerName &&
            formik.errors.sellerName
          }
        />


        {/* Email */}
        <TextField
          fullWidth
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.email &&
            Boolean(formik.errors.email)
          }
          helperText={
            formik.touched.email &&
            formik.errors.email
          }
        />


        {/* Password */}
        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.password &&
            Boolean(formik.errors.password)
          }
          helperText={
            formik.touched.password &&
            formik.errors.password
          }
        />


        {/* Logo Upload */}
        <Button
          variant="outlined"
          component="label"
        >
          Upload Logo
          <input
            hidden
            type="file"
            name="logo"
            accept="image/*"
            onChange={(event:any)=>{
              formik.setFieldValue(
                "logo",
                event.currentTarget.files[0]
              )
            }}
          />
        </Button>


        {/* Banner Upload */}
        <Button
          variant="outlined"
          component="label"
        >
          Upload Banner
          <input
            hidden
            type="file"
            name="banner"
            accept="image/*"
            onChange={(event:any)=>{
              formik.setFieldValue(
                "banner",
                event.currentTarget.files[0]
              )
            }}
          />
        </Button>


      </div>

    </Box>
  )
}

export default SupplierDetails