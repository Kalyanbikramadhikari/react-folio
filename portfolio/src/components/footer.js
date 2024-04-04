import React from 'react'

const Footer = () => {
    return (
        <>

            <div className='border-t my-5 mt-10  border-[#25213b]'>
                <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-full">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                    </div>
                </div>

            </div>

            <div className='flex justify-center pb-5'>
                <span>Site Developed and Managed by <span className='text-blueTick font-bold text-lg'>Kalyan Bikram Adhikari </span> | All Rights Reserved</span>

            </div>
        </>



    )
}

export default Footer