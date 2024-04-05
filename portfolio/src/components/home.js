import React from "react";
import Button from "./button";

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'path/to/your/local/resume.pdf'; 
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div class="flex justify-center items-center h-screen w-[100%] bg-gradient-to-br from-[#225972] to-[#159957]">
      <div className="w-1/2  h-full flex flex-col justify-center items-start text-white p-8">
        <div data-aos="fade-right" className="mb-8 text-2xl">
          

          <span className="font-bold text-4xl">Hi. I'm </span>
          <span className="text-titleBlue text-4xl font-bold">
            Kalyan Bikram Adhikari
          </span>
          <div className="inline">
            <div
              role="img"
              aria-label="Wave Emoji"
              className="mr-2 animate-bounce font-bold text-8xl inline-block"
            >
              👋
            </div>
          </div>
        </div>
        <div className="font-bold text-4xl">
          I am a Frontend and Web Developer
        </div>

        <div className="mb-8 mt-20 flex  gap-10">
          <Button text="CONTACT ME" icon="fa-solid fa-user ml-3" />
          <button onClick={handleDownload} className="bg-white text-blue-500 hover:bg-blue-400 font-bold py-2 rounded-3xl h-14 px-4 pr-6 ">
            <i className="fas fa-download mr-2"></i> RESUME
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2  h-full relative flex justify-center items-center">
        <div className="relative animate-pulse">
          <img
            src="assets/images/me.jpg"
            alt="Your Image"
            className="rounded-full h-96"
          />
          <div className="absolute -top-10 -left-5 mt-4 ml-4 bg-black rounded-full w-36 h-36 flex justify-center items-center">
            <i className="fab fa-react text-blue-500 text-9xl"></i>
          </div>
          <div className="absolute  -top-10 -right-10 mb-4 mr-4 bg-white w-36 h-36 flex justify-center items-center">
            <i className="fab fa-html5 text-orange-500 text-9xl"></i>
          </div>
          <div className="absolute bottom-5 -right-10 mb-4 mr-4   w-36 h-36">
            <img src="assets/images/js.jpg" className="rounded-full" alt="" />
          </div>
          <div className="absolute bottom-5 -left-5 mb-4 mr-4 bg-white w-36 h-36 rounded-full">
            <img
              src="assets/images/nodejs.png"
              className="rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
