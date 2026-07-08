import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import * as Yup from "yup"


const SellerLoginForm = () => {

  const [otpSent, setOtpSent] = useState(false);


  const validationSchema = Yup.object({

    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),

    otp: Yup.string()
      .when([], {
        is: () => otpSent,
        then: (schema) =>
          schema
            .required("OTP is required")
            .length(6, "OTP must be 6 digits")
      })

  });


  return (
    <div className='lg:px-20'>
      <Formik

        initialValues={{
          email: "",
          otp: ""
        }}


        validationSchema={validationSchema}


        onSubmit={(values) => {

          console.log("Login Data:", values);

        }}

      >

        {(formik: any) => (


          <form onSubmit={formik.handleSubmit}>


            <Box>


              <h1 className="text-xl mb-8 text-center">
                LOGIN AS A SELLER
              </h1>



              <div className="flex flex-col gap-5 rounded-md">


                {/* Email */}
                <TextField

                  fullWidth

                  name="email"

                  label="Email"

                  disabled={otpSent}

                  value={formik.values.email}

                  onChange={formik.handleChange}

                  onBlur={formik.handleBlur}

                  error={
                    formik.touched.email && Boolean(formik.errors.email)
                  }

                  helperText={ formik.touched.email && formik.errors.email
                  }

                />

                {
                  otpSent && (

                    <MuiOtpInput

                      length={6}

                      value={formik.values.otp}

                      onChange={(value) =>
                        formik.setFieldValue(
                          "otp",
                          value
                        )
                      }

                    />

                  )
                }



                {
                  !otpSent && (

                    <Button
                      variant="contained"
                      onClick={() => {

                        // API call එක මෙතන
                        // send OTP

                        setOtpSent(true);

                      }}

                    >Send OTP</Button>
                  )
                }

                {
                  otpSent && (
                    <Button type="submit" variant="contained">Verify OTP</Button>
                  )
                }
              </div>
            </Box>
          </form>
        )}
      </Formik>
    </div>

  )
}

export default SellerLoginForm