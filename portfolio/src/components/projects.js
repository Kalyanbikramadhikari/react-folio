import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import Button from './button';

const Project = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const projectSection = document.getElementById('project-section');
            const sectionTop = projectSection.getBoundingClientRect().top;
            setIsVisible(sectionTop < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#3889db] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Projects
                    </span>
                    <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>
            <div className='flex ml-20 mt-10 mr-12 gap-20'>
                

                <div className="flex-initial w-1/2  flex justify-center" >
                    <motion.div
                        id="project-section"
                        className="flex flex-col md:flex-row items-center justify-center mb-8"
                        initial={{ opacity: 0, x: -100 }} // Initial position for the image from the left
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }} // Animate to the default position
                        transition={{ delay: isVisible ? 0.5 : 0 }} // Delay the animation
                    >
                        <img src='assets/images/nichub.png' alt="Project" className="w-full h-auto " />
                    </motion.div>

                </div>

                <div className=" flex flex-initial w-1/2 bg-blue-200 items-start text-start rounded-lg">
                    <motion.div
                        className="flex flex-col p-4" // Added padding directly to this div
                        initial={{ opacity: 0, x: 100 }} // Initial position for the title and description
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }} // Animate from the right
                        transition={{ delay: isVisible ? 0.5 : 0 }} // Delay the animation
                    >
                        <div className="text-2xl font-bold mb-2 self-start">
                            <h6>Shopit</h6>

                        </div>
                        <div className='font-sans text-xl'>
                            I built this .he reason why the text does not start from the leftmost point in the description section is because you have applied padding to the parent div with the class flex bg-blue-200 p-4. The padding adds space around the content inside the div, pushing the text away from the left edge.

                            To make the text start from the leftmost point, you can remove the padding from the parent div or apply padding only to specific child elements. Here's the modified code:
                        </div>
                        <div class="flex gap-x-10 mt-5">
                            <div className='inline-block'>
                                <span className='next-js-button bg-sky-600 p-2 text-white font-bold'>ReactJS</span>




                            </div>
                            <div className='inline-block'>
                                <span className='next-js-button bg-sky-600 p-2 text-white font-bold'>ReactJS</span>




                            </div>
                            <div className='inline-block'>
                                <span className='next-js-button bg-sky-600 p-2 text-white font-bold'>ReactJS</span>




                            </div>

                        </div>



                        <div className='mt-10 gap-20'>
                            <Button text="VISIT SITE" icon="fa-solid fa-square-arrow-up-right" />
                            <Button text="VIEW CODE" icon="fa-solid fa-square-arrow-up-right" />

                        </div>


                    </motion.div>
                </div>

            </div>


            {/* second project */}
            <div className='flex ml-20 mt-20 mr-12 gap-20'>



                <div className=" flex flex-initial w-1/2 bg-blue-200 items-start text-start rounded-lg">
                    <motion.div
                        className="flex flex-col p-4" // Added padding directly to this div
                        initial={{ opacity: 0, x: 100 }} // Initial position for the title and description
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }} // Animate from the right
                        transition={{ delay: isVisible ? 0.5 : 0 }} // Delay the animation
                    >
                        <div className="text-2xl font-bold mb-2 self-start">
                            <h6>Shopit</h6>

                        </div>
                        <div className='font-sans text-xl'>
                            I built this .he reason why the text does not start from the leftmost point in the description section is because you have applied padding to the parent div with the class flex bg-blue-200 p-4. The padding adds space around the content inside the div, pushing the text away from the left edge.

                            To make the text start from the leftmost point, you can remove the padding from the parent div or apply padding only to specific child elements. Here's the modified code:
                        </div>
                        <div class="flex gap-x-10 mt-5">
                            <div className='inline-block'>
                                <span className='next-js-button bg-sky-600 p-2 text-white font-bold'>ReactJS</span>
                            </div>
                            <div className='inline-block'>
                                <span className='next-js-button bg-sky-600 p-2 text-white font-bold'>ReactJS</span>
                            </div>
                            <div className='inline-block'>
                                <span className='next-js-button bg-sky-600 p-2 text-white font-bold'>ReactJS</span>

                            </div>

                        </div> <div className='mt-10 gap-20'>
                            <Button text="VISIT SITE" icon="fa-solid fa-square-arrow-up-right" />
                            <Button text="VIEW CODE" icon="fa-solid fa-square-arrow-up-right" />

                        </div>


                    </motion.div>
                </div>


                <div className="flex-initial w-1/2  flex justify-center" >
                    <motion.div
                        id="project-section"
                        className="flex flex-col md:flex-row items-center justify-center mb-8"
                        initial={{ opacity: 0, x: -100 }} // Initial position for the image from the left
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }} // Animate to the default position
                        transition={{ delay: isVisible ? 0.5 : 0 }} // Delay the animation
                    >
                        <img src='assets/images/nichub.png' alt="Project" className="w-full h-auto " />
                    </motion.div>

                </div>

            </div>


           
        </>

    );
};

export default Project;
