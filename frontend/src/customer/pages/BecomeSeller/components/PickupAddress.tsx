import { Box, Grid, TextField } from '@mui/material'
import React from 'react'

const PickupAddress = ({ formik }: any) => {
  return (
    <Box>

      <h1 className="text-xl my-8 ">
        Pickup Address
      </h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          {/* Name */}
          <Grid size={12}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>


          {/* Locality */}
          <Grid size={6}>
            <TextField
              fullWidth
              name="locality"
              label="Locality"
              value={formik.values.locality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid>


          {/* City */}
          <Grid size={6}>
            <TextField
              fullWidth
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>


          {/* Address */}
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>


          {/* State */}
          <Grid size={12}>
            <TextField
              fullWidth
              name="state"
              label="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>


          {/* Pin Code */}
          <Grid size={6}>
            <TextField
              fullWidth
              name="pinCode"
              label="Pin Code"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
              helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid>


          {/* Mobile Number */}
          <Grid size={6}>
            <TextField
              fullWidth
              name="mobileNum"
              label="Mobile Number"
              value={formik.values.mobileNum}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobileNum && Boolean(formik.errors.mobileNum)}
              helperText={formik.touched.mobileNum && formik.errors.mobileNum}
            />
          </Grid>

        </Grid>
      </Box>

    </Box>
  )
}

export default PickupAddress
