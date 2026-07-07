import { AccountCircle } from '@mui/icons-material'
import React from 'react'

const ProfileFieldCard = () => {
  return (
    <div>
      <div className="w-full max-w-3xl mx-auto px-4">


                <div className="flex justify-center pb-6">
                    {false ? (
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ8igmLuUxUP0D5pZysV79O3nA7oER_1AaPTIfs5oPQ&s"
                            alt="Profile"
                            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-52 lg:h-52 rounded-full object-cover object-top"
                        />
                    ) : (
                        <AccountCircle
                            color="primary"
                            className="!w-24 !h-24 sm:!w-32 sm:!h-32 lg:!w-52 lg:!h-52"
                        />
                    )}
                </div>


                <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                    Personal Details
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-y-2 gap-x-6 text-gray-600">

                    <strong>Name</strong>
                    <p className="break-words">Saman</p>

                    <strong>Email</strong>
                    <p className="break-words">saman123@gmail.com</p>

                    <strong>Mobile</strong>
                    <p>+94 71 244 6924</p>

                </div>

            </div>
    </div>
  )
}

export default ProfileFieldCard
