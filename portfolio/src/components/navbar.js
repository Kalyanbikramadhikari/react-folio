import React from "react";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="shadow-md py-3 w-full sticky top-0 bg-white flex justify-between z-50">
      <div className="flex gap-x-4 ml-10 items-center ">
        <h5 className="text-[#1ea1f3] font-bold text-4xl">Kalyan. </h5>
        <img src="/assets/images/blue-tick.png" className="h-10 " alt="" />
      </div>

      <div className="flex justify-between gap-x-10 items-center mr-10">
        <Link to="project" smooth={true} offset={-40} duration={500}>
        Project
        </Link>
        <Link to="skills" smooth={true} offset={0} duration={500}>
         Skills
        </Link>
        <Link to="project" smooth={true} offset={-40} duration={500}>
         Project
        </Link>
        {/* <a href="skills"><h5 className='text-black font-semibold text-2xl'>
            </h5></a>
          <a href="projects"><h5 className='text-black font-semibold text-2xl'>Projects</h5></a>
          <a href="skills"><h5 className='text-black font-semibold text-2xl'>Skills</h5></a> */}

        {/* <h5 className='text-black font-semibold text-2xl'>Projects</h5>
            <h5 className='text-black font-semibold text-2xl'>Projects</h5> */}
      </div>
    </div>
  );
};

export default Navbar;
