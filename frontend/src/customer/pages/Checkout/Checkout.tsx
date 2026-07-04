import { Box, Button, FormControl, FormControlLabel, IconButton, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from './AddressCard'
import { Add, Close, LocalOffer } from '@mui/icons-material'
import AddressForm from './AddressForm';
import PricingCard from '../Cart/PricingCard';
import { teal } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    p: 4,
};

const Checkout = () => {
    const paymentGetwayList = [
        {
            value: "rozerpay",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZINwbuS7as4WWbZ9ExK5nnik9YQR3ENtSyMIM1NfkEXCgOGDQhZQ2Lyh&s=10",
            label: "",
        },
        {
            value: "stripe",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLub6Jwn9_QWM2MSgsypVwvabHxvj0WgGnXhLp8ovGw&s=10",
            label: ""
        }
    ]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [paymentGetway,setPaymentGetway] = useState("stripe")

    const handelPaymentGetway=(e:any)=>{
        setPaymentGetway(e.target.value)
        
    }
    
    return (
        <>
            <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>
                <div className='space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-9'>
                    <div className='col-span-2 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-semibold capitalize'> select delivary address</h1>
                            <Button onClick={handleOpen} variant='outlined' size='medium'>add new address</Button>
                        </div>
                        <div className='pt-3'>
                            <p className='text-sm text-gray-600 my-2'>Saved Addreses</p>
                            <div className='space-y-2'>
                                {[1, 1, 1].map((item) => <div><AddressCard /></div>)}
                            </div>

                        </div>
                        <div className='border border-gray-300 rounded-md'>
                            <Button onClick={handleOpen} startIcon={<Add />} variant='text' size='medium' sx={{ fontSize: "12px" }} >add new address</Button>
                        </div>

                    </div>

                    <div className="lg:sticky lg:top-20 h-fit">
                        <div className=' w-full space-y-2 rounded-md border border-gray-300 mb-2'>
                            <div className='text-gray-400 p-2 text-center'>
                                <span className='capitalize'>chose payment getway</span>
                            </div>

                            <div className='p-2'>
                                <FormControl fullWidth>
                                    <RadioGroup
                                        aria-labelledby='paymentMethod'
                                        defaultValue=""
                                        name="paymentMethod"
                                        className="w-full"
                                        onChange={handelPaymentGetway}
                                        value={paymentGetway}
                                    >
                                        <div className='flex flex-col sm:flex-row gap-3 w-full'>

                                            {paymentGetwayList.map((item) => (
                                                <FormControlLabel
                                                    key={item.value}
                                                    value={item.value}
                                                    control={<Radio size='small' />}
                                                    label={
                                                        <img
                                                            src={item.image}
                                                            alt={item.label}
                                                            className='h-8 sm:h-10 object-contain'
                                                        />
                                                    }
                                                    className='border border-gray-300 flex-1 flex justify-center items-center
                                                     rounded-md'
                                                    sx={{
                                                        margin: 0,
                                                        padding: -1,
                                                        width: "100%",
                                                        height: "auto"
                                                    }}
                                                />
                                            ))}

                                        </div>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <PricingCard />
                    </div>

                </div>

            </div>
            {/*pop-up model */}
            <div className='relative'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className='absolute top-1 right-1'>
                            <IconButton onClick={handleClose}>
                                <Close />
                            </IconButton>
                        </div>


                        <div>
                            <AddressForm />
                        </div>

                    </Box>
                </Modal>
            </div>

        </>
    )
}

export default Checkout
