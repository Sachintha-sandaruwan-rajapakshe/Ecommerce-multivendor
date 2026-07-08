import { Box, TextField } from '@mui/material'
import React from 'react'

const BankDetails = ({formik}:any) => {
  return (
    <Box>

      <h1 className="text-xl mb-8">
        Bank Details
      </h1>


      <div className="flex flex-col gap-5">


        {/* Account Number */}
        <TextField
          fullWidth
          name="accoutNumber"
          label="Account Number"
          value={formik.values.accoutNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.accoutNumber &&
            Boolean(formik.errors.accoutNumber)
          }
          helperText={
            formik.touched.accoutNumber &&
            formik.errors.accoutNumber
          }
        />


        {/* Account Holder Name */}
        <TextField
          fullWidth
          name="accoutHolderName"
          label="Account Holder Name"
          value={formik.values.accoutHolderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.accoutHolderName &&
            Boolean(formik.errors.accoutHolderName)
          }
          helperText={
            formik.touched.accoutHolderName &&
            formik.errors.accoutHolderName
          }
        />


        {/* IFSC Code */}
        <TextField
          fullWidth
          name="ifscCode"
          label="IFSC Code"
          value={formik.values.ifscCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.ifscCode &&
            Boolean(formik.errors.ifscCode)
          }
          helperText={
            formik.touched.ifscCode &&
            formik.errors.ifscCode
          }
        />


      </div>

    </Box>
  )
}

export default BankDetails