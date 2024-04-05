import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import Button from './button';

const Project = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const projectSections = document.querySelectorAll('.project-section');

            projectSections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                setIsVisible(prevState => ({
                    ...prevState,
                    [section.id]: sectionTop < windowHeight
                }));
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div id='projects' className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#3889db] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Projects
                    </span>
                    <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>
            <div className='flex ml-20 mt-10 mr-12 gap-20'>
                <div className="flex-initial w-1/2  flex justify-center project-section" id="project-section-1">
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center mb-8"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: isVisible['project-section-1'] ? 1 : 0, x: isVisible['project-section-1'] ? 0 : -100 }}
                        transition={{ delay: isVisible['project-section-1'] ? 0.5 : 0 }}
                    >
                        <img src='assets/images/nichub.png' alt="Project" className="w-full h-auto " />
                    </motion.div>
                </div>

                <div className=" flex flex-initial w-1/2 items-start text-start rounded-lg">
                    <motion.div
                        className="flex flex-col p-4  bg-blue-200 w-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: isVisible['project-section-1'] ? 1 : 0, x: isVisible['project-section-1'] ? 0 : 100 }}
                        transition={{ delay: isVisible['project-section-1'] ? 0.5 : 0 }}
                    >
                        <div className="text-2xl font-bold mb-2 self-start">
                            <h6>Shopit</h6>
                        </div>
                        <div className='font-sans text-xl'>
                            I built this.
                        </div>
                        <div class="flex gap-x-10 mt-5">
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

            {/* Second project */}
            <div className='flex ml-20 mt-20 mr-12 gap-20'>
                <div className=" flex flex-initial w-1/2  items-start text-start rounded-lg">
                    <motion.div
                        className="flex flex-col p-4 bg-blue-200 w-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: isVisible['project-section-2'] ? 1 : 0, x: isVisible['project-section-2'] ? 0 : 100 }}
                        transition={{ delay: isVisible['project-section-2'] ? 0.5 : 0 }}
                    >
                        <div className="text-2xl font-bold mb-2 self-start">
                            <h6>Shopit</h6>
                        </div>
                        <div className='font-sans text-xl'>
                            I built this.
                        </div>
                        <div class="flex gap-x-10 mt-5">
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

                <div className="flex-initial w-1/2  flex justify-center project-section" id="project-section-2">
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-center mb-8"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: isVisible['project-section-2'] ? 1 : 0, x: isVisible['project-section-2'] ? 0 : -100 }}
                        transition={{ delay: isVisible['project-section-2'] ? 0.5 : 0 }}
                    >
                        <img src='assets/images/nichub.png' alt="Project" className="w-full h-auto " />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Project;
