import React from 'react'

const GetInTouch = () => {
    return (
        <>
        <div className='border-t my-5 lg:my-10 border-[#25213b]'>
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-full">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
            <div className="flex justify-center my-5 lg:py-2">

                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#3889db] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Get In Touch
                    </span>
                    <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>
        </div>


        <div className='flex flex-col justify-center'>
            <div className='font-medium text-xl'>Please feel free to contact me if you need any sort of website.</div>
            <div className='font-medium text-xl'>I will try to help you as soon as I can. 🤗</div>
            <div className='flex justify-center gap-x-8 mt-14'>
                <a href="https://github.com/Kalyanbikramadhikari" ><img className='h-12' src="assets/images/git-hub-logo.png" alt="" /></a>
                <a href="https://www.instagram.com/kalyan08bikram/" ><img className='h-12' src="assets/images/linkedin-logo.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/kalyan-bikram-adhikari-495907266/" ><img className='h-12' src="assets/images/insta-logo.png" alt="" /></a>
                <a href=" https://www.upwork.com/freelancers/~01fb47069aaec8d646" ><img className='h-12' src="assets/images/upwork.svg" alt="" /></a>

            </div>
        </div>
        </>
    )
}

export default GetInTouch