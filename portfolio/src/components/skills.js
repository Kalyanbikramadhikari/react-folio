import React from 'react'
import Marquee from "react-fast-marquee";

// import bootstrap from '../../public/assets/images/bootstrap.svg'
// import c from '../../public/assets/images/c.svg'
// import canva from '../../public/assets/images/canva.svg'
// import css from '../../public/assets/images/css.svg'
// import django from '../../public/assets/images/django.svg'
// import figma from '../../public/assets/images/figma.svg'
// import html from '../../public/assets/images/html.svg'

// import mongoDB from '../../public/assets/images/mongoDB.svg'
// import python from '../../public/assets/images/python.svg'
// import react from '../../public/assets/images/react.svg'
// import sqlite from '../../public/assets/images/sqlite.svg'
// import tailwind from '../../public/assets/images/tailwind.svg'
// import wordpress from '../../public/assets/images/wordpress.svg'
// import javascript from '../../public/assets/images/javascript.svg'
// import materialui from '../../public/assets/images/materialui.svg'


const Skills = () => {

    const skillsData = [
        'HTML',
        'CSS',
        'Canva',
        'Javascript',
        'Python',
        'Wordpress',
        'React',
        'C',
        'Tailwind',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Git',
        'django', 
        'Bootstrap',
        'Figma',
        'MaterialUI',
 
    ]

    const skillsImage = (skill) => {
        // Map skill names to their respective image file names
        const skillImageMap = {
            bootstrap: 'bootstrap.svg',
            c: 'c.svg',
            canva: 'canva.svg',
            css: 'css.svg',
            django: 'django.svg',
            figma: 'figma.svg',
            html: 'html.svg',
            javascript: 'javascript.svg',
            materialui: 'materialui.svg',
            mongodb: 'mongodb.svg',
            python: 'python.svg',
            react: 'react.svg',
            sqlite: 'sqlite.svg',
            tailwind: 'tailwind.svg',
            wordpress: 'wordpress.svg',
            mysql:'mysql.svg',
            git: 'git.svg',
            postgresql: 'postgresql.svg',
            // wordpress: 'wordpress.svg',

            // Add more mappings as needed
        };
    
        // Convert skill name to lowercase
        const skillID = skill.toLowerCase();
    
        // Check if the skill is in the mapping
        if (skillID in skillImageMap) {
            // Construct the relative path to the image
            return `/assets/images/${skillImageMap[skillID]}`;
        } else {
            // Return a default image or handle the case where image for the skill is not found
            // For example, you can return a placeholder image
            return '/assets/images/js.png'; // Adjust the path as needed
        }
    };
    
    

    return (
        <div id="skills" className="relative z-40 border-t my-5 lg:my-10 border-[#25213b]">
            {/* <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div> */}

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-2">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-blueTick w-fit text-white p-2 px-5 text-xl rounded-md">
                        Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
                </div>
            </div>

            <div className="w-full my-8">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={id}>
                            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#2e1551] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <img
                                            src={skillsImage(skill)}
                                            alt={skill}
                                            width={40}
                                            height={40}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-white text-sm sm:text-lg">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Skills