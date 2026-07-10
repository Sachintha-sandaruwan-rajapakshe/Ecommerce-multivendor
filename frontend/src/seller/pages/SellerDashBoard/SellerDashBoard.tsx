import React from 'react'
import SellerDrawerList from '../../components/sellerDrawerlist/SellerDrawerList'
import Routes from '../../../Routes/SellerRoutes'


const SellerDashBoard = () => {

    const toggleDrower = () => {

    }
    return (
        <div>
            <div className='lg:flex lg:h-[90vh]'>
                <section className='hidden lg:block h-full'>
                    <SellerDrawerList toggleDrower={toggleDrower} />

                </section>
                <section className='p-10 w-full lg:w-[80%] overflow-y-auto'>
                    <Routes/>
                </section>
            </div>
        </div>
    )
}

export default SellerDashBoard
