import { Box, Button, Grid, Paper, styled, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const AddNewCouponForm = () => {

  const validationSchema = Yup.object({
    couponCode: Yup.string()
      .required('Coupon code is required'),

    discountPercentage: Yup.number()
      .required('Discount percentage is required')
      .min(1, 'Minimum discount is 1%')
      .max(100, 'Maximum discount is 100%'),

    startDate: Yup.date()
      .required('Start date is required'),

    endDate: Yup.date()
      .required('End date is required')
      .min(
        Yup.ref('startDate'),
        'End date must be after start date'
      ),
      minimumOrderValue: Yup.string()
      .required('Start date is required'),
  });


  const formik = useFormik({
    initialValues: {
      couponCode: '',
      discountPercentage: '',
      startDate: '',
      endDate: '',
      minimumOrderValue:0
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });


  return (
    <div className='lg:pt-20'>

      <h1 className='py-10 text-gray-400 lg:text-2xl text-center text-start text-xl'>
        Create New Coupon
      </h1>


      <form onSubmit={formik.handleSubmit}>

        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}>

            {/* Coupon Code */}
            <Grid size={6}>
              <TextField
                type="text"
                id="couponCode"
                label="Coupon Code"
                variant="outlined"
                fullWidth
                name="couponCode"
                value={formik.values.couponCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.couponCode &&
                  Boolean(formik.errors.couponCode)
                }
                helperText={
                  formik.touched.couponCode &&
                  formik.errors.couponCode
                }
              />
            </Grid>


            {/* Discount Percentage */}
            <Grid size={6}>
              <TextField
                type="number"
                id="discountPercentage"
                label="Discount Percentage"
                variant="outlined"
                fullWidth
                name="discountPercentage"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.discountPercentage &&
                  Boolean(formik.errors.discountPercentage)
                }
                helperText={
                  formik.touched.discountPercentage &&
                  formik.errors.discountPercentage
                }
              />
            </Grid>


            {/* Start Date */}
            <Grid size={6}>
              <TextField
                type="date"
                id="startDate"
                label="Start Date"
                variant="outlined"
                fullWidth
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.startDate &&
                  Boolean(formik.errors.startDate)
                }
                helperText={
                  formik.touched.startDate &&
                  formik.errors.startDate
                }
              />
            </Grid>


            {/* End Date */}
            <Grid size={6}>
              <TextField
                type="date"
                id="endDate"
                label="End Date"
                variant="outlined"
                fullWidth
                name="endDate"
                value={formik.values.endDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.endDate &&
                  Boolean(formik.errors.endDate)
                }
                helperText={
                  formik.touched.endDate &&
                  formik.errors.endDate
                }
              />
            </Grid>
            <Grid size={12}>
              <TextField
                type="text"
                id="minimumOrderValue"
                label="Minimum order value"
                variant="outlined"
                fullWidth
                name="minimumOrderValue"
                value={formik.values.minimumOrderValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.minimumOrderValue &&
                  Boolean(formik.errors.minimumOrderValue)
                }
                helperText={
                  formik.touched.minimumOrderValue &&
                  formik.errors.minimumOrderValue
                }
              />
            </Grid>


            {/* Submit Button */}
            <Grid size={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="uppercase lg:h-13"
              >
                Create Coupon
              </Button>
            </Grid>


          </Grid>

        </Box>

      </form>

    </div>
  );
};

export default AddNewCouponForm;