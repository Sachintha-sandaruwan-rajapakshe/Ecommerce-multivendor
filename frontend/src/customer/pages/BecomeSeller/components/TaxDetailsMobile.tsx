import { Box, TextField } from '@mui/material';
import React from 'react';


const TaxDetailsMobile = ({ formik }: any) => {

  return (
    <Box>

      <h1 className="text-xl mb-8">
        Contact Details
      </h1>


      <div className="flex flex-col gap-5">

        {/* Mobile Number */}
        <TextField
          fullWidth
          name="mobile"
          label="Mobile Number"
          className='rounded-md'
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />


        {/* GST Number */}
        <TextField
          className='rounded-md '
          fullWidth
          name="GSTIN"
          label="GST Number"
          value={formik.values.GSTIN}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
          helperText={formik.touched.GSTIN && formik.errors.GSTIN}
        />

      </div>

    </Box>
  )
}

export default TaxDetailsMobile;