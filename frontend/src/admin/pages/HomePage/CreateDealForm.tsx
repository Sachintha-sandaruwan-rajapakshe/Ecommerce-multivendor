import React from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const categories = [
  {
    id: 1,
    name: "Pizza",
  },
  {
    id: 2,
    name: "Burger",
  },
  {
    id: 3,
    name: "Drinks",
  },
];

const validationSchema = Yup.object({
  discount: Yup.number()
    .typeError("Discount is required")
    .required("Discount is required")
    .min(1, "Discount must be at least 1%")
    .max(100, "Discount cannot exceed 100%"),

  category: Yup.string().required("Please select a category"),
});

const CreateDealForm = () => {
  const formik = useFormik({
    initialValues: {
      discount: "",
      category: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      // API Call
      // axios.post("/api/deals", values)

      resetForm();
    },
  });

  return (
    <Box sx={{ pt: 10 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Discount */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Discount (%)"
              name="discount"
              type="number"
              value={formik.values.discount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.discount &&
                Boolean(formik.errors.discount)
              }
              helperText={
                formik.touched.discount &&
                formik.errors.discount
              }
            />
          </Grid>

          {/* Category */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              select
              fullWidth
              label="Category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.category &&
                Boolean(formik.errors.category)
              }
              helperText={
                formik.touched.category &&
                formik.errors.category
              }
            >
              {categories.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Button */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ height: "56px" }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateDealForm;