import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, TextField, MenuItem, CircularProgress, IconButton } from '@mui/material';
import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { uploadToCloudinary } from '../../../Utility/UploadToCloudnary';
import { Colors } from '../../../customer/pages/Filter/Color';
export const Sizes = [
  {
    name: "XS",
    value: "XS"
  },
  {
    name: "S",
    value: "S"
  },
  {
    name: "M",
    value: "M"
  },
  {
    name: "L",
    value: "L"
  },
  {
    name: "XL",
    value: "XL"
  },
  {
    name: "XXL",
    value: "XXL"
  }
]


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


export const categories = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,

    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,

        levelThreeCategory: [
          {
            name: "T-Shirts",
            categoryId: "men_t_shirts",
            parentCategoryId: "men_topwear",
            level: 3
          },
          {
            name: "Shirts",
            categoryId: "men_shirts",
            parentCategoryId: "men_topwear",
            level: 3
          }
        ]
      },

      {
        name: "Bottomwear",
        categoryId: "men_bottomwear",
        parentCategoryId: "men",
        level: 2,

        levelThreeCategory: [
          {
            name: "Jeans",
            categoryId: "men_jeans",
            parentCategoryId: "men_bottomwear",
            level: 3
          }
        ]
      }
    ]
  }
];

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [thirdCategory, setThirdCategory] = useState("");

  const [uploadImage, setUploadImage] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formik = useFormik({

    initialValues: {
      title: "",
      description: "",
      mrpPrice: 0,
      sellingPrice: 0,
      quantity: 0,
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      size: "",
    },

   /* validationSchema: Yup.object({

      title: Yup.string()
        .required("Title is required"),

      description: Yup.string()
        .required("description is required")
        .min(10, "description must be at least 10 characters"),

      mrpPrice: Yup.number()
        .typeError("MRP Price must be a number")
        .required("MRP Price is required")
        .positive("MRP Price must be greater than 0"),

      sellingPrice: Yup.number()
        .typeError("Selling Price must be a number")
        .required("Selling Price is required")
        .positive("Selling Price must be greater than 0")
        .test(
          "selling-price",
          "Selling Price cannot be greater than MRP Price",
          function (value) {
            return value <= this.parent.mrpPrice;
          }
        ),

      quantity: Yup.number()
        .typeError("Quantity must be a number")
        .required("Quantity is required")
        .integer("Quantity must be an integer")
        .min(1, "Quantity must be at least 1"),

      color: Yup.string()
        .required("Color is required"),

      images: Yup.array()
        .min(1, "Please upload at least one image"),

      category: Yup.string()
        .required("Category is required"),

      category2: Yup.string()
        .required("Sub Category is required"),

      category3: Yup.string()
        .required("Third Category is required"),

      size: Yup.string()
        .required("Size is required")

    }),*/
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];

    if (!file) return;

    try {

      setUploadImage(true);

      const imageUrl = await uploadToCloudinary(file);
      console.log('CLOUDNATY LINK ' + imageUrl);
      formik.setFieldValue(
        "images",
        [...formik.values.images, imageUrl]
      );

    } catch (error) {
      console.error(error);
    } finally {
      setUploadImage(false);
    }

  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  }

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    })
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={12} className='flex flex-wrap gap-5'>
              <input
                type="file"
                name="file"
                id="fileInput"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

              <label className='relative' htmlFor="fileInput">
                <span className='w-24 h-24 cursor-pointer flex items-center justify-center border border-gray-300 rounded-md p-3'>
                  <AddPhotoAlternate className='text-gray-700' />
                </span>
                {
                  uploadImage && (
                    <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                      <CircularProgress />
                    </div>
                  )
                }
              </label>
              <div className='flex flex-wrap gap-2'>
                {
                  formik.values.images.map((image, index) =>
                    <div className='relative'>
                      <img className='w-24 h-24 object-cover' key={index} src={image} alt={`productImage ${index + 1}`}
                      />
                      <IconButton onClick={() => handleRemoveImage(index)}
                        className=''
                        size='small'
                        color='error'
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          outline: "none",
                        }}
                      >
                        <Close sx={{ fontSize: "1rem" }} />
                      </IconButton>
                    </div>)}
              </div>
            </Grid>
            <Grid size={12}>
              <TextField variant="outlined" fullWidth
                id="title"
                name="title"
                type="text"
                label="title"
                onChange={formik.handleChange}
                value={formik.values.title}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>
            <Grid size={12}>
              <TextField variant="outlined" fullWidth
                id="description"
                multiline
                rows={4}
                name="description"
                type="text"
                label="description"
                onChange={formik.handleChange}
                value={formik.values.description}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid size={3}>
              <TextField variant="outlined" fullWidth
                id="mrpPrice"
                name="mrpPrice"
                type="text"
                label="mrpPrice"
                onChange={formik.handleChange}
                value={formik.values.mrpPrice}
                onBlur={formik.handleBlur}
                error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
                helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              />
            </Grid>
            <Grid size={3}>
              <TextField variant="outlined" fullWidth
                id="sellingPrice"
                name="sellingPrice"
                type="text"
                label="sellingPrice"
                onChange={formik.handleChange}
                value={formik.values.sellingPrice}
                onBlur={formik.handleBlur}
                error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
                helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
              />
            </Grid>
            <Grid size={3}>
              <TextField
                variant="outlined"
                fullWidth
                id="color"
                name="color"
                label="color"
                select
                value={formik.values.color}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.color &&
                  Boolean(formik.errors.color)
                }
                helperText={
                  formik.touched.color &&
                  formik.errors.color
                }
              >

                {Colors.map((item) => <MenuItem key={item.name}  value={item.name}>
                  {item.name}
                </MenuItem>)}

              </TextField>

            </Grid>
            <Grid size={3}>
              <TextField
  variant="outlined"
  fullWidth
  id="size"
  name="size"
  label="Size"
  select
  value={formik.values.size}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={
    formik.touched.size &&
    Boolean(formik.errors.size)
  }
  helperText={
    formik.touched.size &&
    formik.errors.size
  }
>

{
  (Sizes || []).map((item)=>(
    <MenuItem
      key={item.name}
      value={item.name}
    >
      {item.name}
    </MenuItem>
  ))
}

</TextField>
            </Grid>
            <Grid size={4}>
              <TextField
                select
                fullWidth
                name='category'
                label="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSubCategory("");
                  setThirdCategory("");
                }}
              >

                {
                  categories.map((item) => (
                    <MenuItem
                      key={item.categoryId}
                      value={item.categoryId}
                    >
                      {item.name}
                    </MenuItem>
                  ))
                }

              </TextField>
            </Grid>
            <Grid size={4}>
              <TextField
                select
                fullWidth
                label="Sub Category"
                value={subCategory}
                onChange={(e) => {
                  setSubCategory(e.target.value);
                  setThirdCategory("");
                }}
              >

                {
                  categories
                    .find(
                      item => item.categoryId === category
                    )
                    ?.levelTwoCategory
                    .map((item) => (
                      <MenuItem
                        key={item.categoryId}
                        value={item.categoryId}
                      >
                        {item.name}
                      </MenuItem>
                    ))
                }

              </TextField>
            </Grid>
            <Grid size={4}>
              <TextField
                select
                fullWidth
                label="Third Category"
                value={formik.values.category3}
                onChange={(e) => {
                  setThirdCategory(e.target.value);
                }}
              >

                {
                  categories
                    .find(
                      item => item.categoryId === category
                    )
                    ?.levelTwoCategory
                    .find(
                      item => item.categoryId === subCategory
                    )
                    ?.levelThreeCategory
                    .map((item) => (
                      <MenuItem
                        key={item.categoryId}
                        value={item.categoryId}
                      >
                        {item.name}
                      </MenuItem>
                    ))
                }

              </TextField>
            </Grid>
            <Grid size={12}>
                <Button type="submit" variant='contained' fullWidth sx={{height:50}}>submit</Button>
            </Grid>
          </Grid>
        </Box>

      </form>

    </div>
  )
}

export default AddProduct
