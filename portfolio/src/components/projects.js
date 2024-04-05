import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For animations
import Button from "./button";

const Project = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const projectSections = document.querySelectorAll(".project-section");

      projectSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        setIsVisible((prevState) => ({
          ...prevState,
          [section.id]: sectionTop < windowHeight,
        }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contents = [
    {
      pname: "Lorem Ipsum Project",
      description:
        "This project aims to generate dummy text for various purposes using the classic Lorem Ipsum text as a base.",
      image: '<img src="https://example.com/image.jpg" alt="Project Image">',
    },
    {
      pname: "Lorem Ipsum Project",
      description:
        "This project aims to generate dummy text for various purposes using the classic Lorem Ipsum text as a base.",
      image: '<img src="https://example.com/image.jpg" alt="Project Image">',
    },
    {
      pname: "Lorem Ipsum Project",
      description:
        "This project aims to generate dummy text for various purposes using the classic Lorem Ipsum text as a base.",
      image: '<img src="https://example.com/image.jpg" alt="Project Image">',
    },
    {
      pname: "Lorem Ipsum Project",
      description:
        "This project aims to generate dummy text for various purposes using the classic Lorem Ipsum text as a base.",
      image: '<img src="https://example.com/image.jpg" alt="Project Image">',
    },
    {
      pname: "Lorem Ipsum Project",
      description:
        "This project aims to generate dummy text for various purposes using the classic Lorem Ipsum text as a base.",
      image: '<img src="https://example.com/image.jpg" alt="Project Image">',
    },
  ];

  const projectComponent = (index, pr) => {
    const isEven = index % 2 === 0;
  
    return (
      <div data-aos-delay={index*400} data-aos={index%2===0?"fade-right":"fade-left"} key={index} className="flex space-x-12 p-16 ">
  
        {/* Left component */}
        <div
       
          className={`flex-initial w-1/2 flex justify-center project-section ${
            isEven ? "" : "order-2"
          }`}
          id={`project-section-${index}`}
        >
          <img
            src="assets/images/nichub.png"
            alt="Project"
            className="w-full h-auto"
          />
        </div>
  
        {/* Right component */}
        <div
        
          className={`w-1/2 items-start text-start rounded-lg ${
            isEven ? "order-2" : ""
          }`}
        >
          <h2 className="text-[1.25rem] font-semibold">{pr.pname}</h2>
          <h3 className="text-[1rem] font-thin">{pr.description}</h3>
        </div>
      </div>
    );
  };
  

  return (
    <section>
      <div id="project" className="flex pt-16 justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#3889db] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#3fc6ff]"></span>
        </div>
      </div>
      {contents.map((pr, index) => (
        projectComponent(index,pr)
    
  
      ))}

      {/* Second project */}
    </section>
  );
};

export default Project;
