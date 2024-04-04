import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-md py-3 w-full sticky top-0 bg-white flex justify-between z-50' >
        <div className='flex gap-x-4 ml-10 items-center ' >
            <h5 className='text-[#1ea1f3] font-bold text-4xl'>Kalyan. </h5>
            <img src="/assets/images/blue-tick.png" className='h-10 ' alt="" />
        </div>

        <div className='flex justify-between gap-x-10 items-center mr-10'>
            <h5 className='text-black font-semibold text-2xl'>Skills</h5>
            <h5 className='text-black font-semibold text-2xl'>Projects</h5>
            <h5 className='text-black font-semibold text-2xl'>Projects</h5>

        </div>


    </div>
  )
}

export default Navbar