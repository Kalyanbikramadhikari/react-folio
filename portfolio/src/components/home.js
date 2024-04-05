import React from 'react';
import Button from './button';


const Home = () => {
    

    return (
        // bg-[#225972]
        
<div className="flex justify-center items-center h-screen w-screen bg-[#225972]">
                    {/* Left Section */}
                    <div className="w-3/4 h-full flex flex-col justify-center text-white p-8">
                        <div className="mb-8 text-2xl">
                            <div className='inline'>
                                <div role="img" aria-label="Wave Emoji" className="mr-2 animate-bounce font-bold text-8xl inline-block">
                                    👋

                                </div>


                            </div>


                            <span className='font-bold text-4xl'>Hi. I'm </span>
                            <span className='text-titleBlue text-4xl font-bold'>
                                Kalyan Bikram Adhikari
                            </span>


                        </div>
                        <div className='font-bold text-4xl'>
                            I am a Frontend and Web Developer
                        </div>


                        <div className="mb-8 mt-20 flex  gap-10">
                            {/* <button className="bg-white border-red-800 border-solid  text-blue-500 hover:bg-blue-400 font-bold py-2  mr-2 rounded-3xl h-14 px-6">
                                CONTACT ME
                                <i class="fa-solid fa-user ml-3"></i>
                            </button> */}
                            <Button text="CONTACT ME" icon="fa-solid fa-user ml-3"/>
                            <button className="bg-white text-blue-500 hover:bg-blue-400 font-bold py-2 rounded-3xl h-14 px-4 pr-6 ">
                                <i className="fas fa-download mr-2"></i> RESUME
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-1/2 h-full relative flex justify-center items-center">
                        <div className="relative animate-pulse">
                            <img src="assets/images/me.jpg" alt="Your Image" className="rounded-full h-96" />
                            <div className="absolute -top-10 -left-5 mt-4 ml-4 bg-black rounded-full w-36 h-36 flex justify-center items-center">
                                <i className="fab fa-react text-blue-500 text-9xl"></i>
                            </div>
                            <div className="absolute  -top-10 -right-10 mb-4 mr-4 bg-white w-36 h-36 flex justify-center items-center">
                                <i className="fab fa-html5 text-orange-500 text-9xl"></i>
                            </div>
                            <div className="absolute bottom-5 -right-10 mb-4 mr-4   w-36 h-36">
                                <img src="assets/images/js.jpg" className='rounded-full' alt="" />
                            </div>
                            <div className="absolute bottom-5 -left-5 mb-4 mr-4 bg-white w-36 h-36 rounded-full">
                                <img src="assets/images/nodejs.png" className='rounded-full' alt="" />
                            </div>
                            {/* Add other icons as needed */}
                        </div>
                    </div>

                </div>
            
    );
}

export default Home;
