import React from 'react';
import exploreIcon from '../assets/images/exploreIcon.png';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <div className="mx-auto mb-[140px] flex lg:flex-row flex-col hero-container max-w-7xl">
        <div className="lg:w-1/2 w-full flex flex-col mb-8 lg:mb-0 hero-text px-1">
          <div className="relative mb-[76.5px] pb-[35px] w-fit hero-content">
            <div className="relative hero-flex">
              {/* Explore Africa */}
              <div className="shadow-lg rounded-[30px] bg-white mb-[36px] flex flex-row items-center py-[15px] px-4 w-fit">
                <div className="text-[16px] font-lato font-medium text-green-700">
                  Explore Africa!
                </div>
                <img src={exploreIcon} alt="Explore icon" className="w-[20px] h-[20px] ml-2" />
              </div>
              {/* Hero Title */}
              <p className="font-plusJakarta font-bold text-4xl lg:text-6xl text-black leading-tight hero-heading">
                Unveiling <span>Africa's Wonder</span> to the World
              </p>
            </div>
            {/* Hero Subtitle */}
            <p className="text-[18px] lg:text-[24px] font-lato text-gray-800 mt-4 hero-subheading">
              Escape the ordinary, unforgettable experiences start here! Your journey to extraordinary begins now!
            </p>
          </div>
          {/* Get Started Button */}
          <div className="rounded-[45px] bg-red-700 flex items-center justify-center py-[15px] lg:py-[21.5px] w-[180px] lg:w-[323px]">
            <span className="font-lato font-semibold text-[16px] lg:text-[24px] text-white">
              Get Started
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          {/* First Row of Images */}
          <div className="mb-[43px] flex flex-row w-full justify-center lg:justify-start">
            <div className="rounded-[30px] bg-[url('assets/images/LandingSection.jpeg')] bg-center bg-cover bg-no-repeat w-[256px] h-[256px] lg:w-[265px] lg:h-[265px] mx-4"></div>
            <div className="rounded-[30px] bg-[url('assets/images/HeroImage4.jpeg')] bg-center bg-cover bg-no-repeat w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] mx-4"></div>
          </div>
          {/* Second Row of Images */}
          <div className="flex flex-row w-full justify-center lg:justify-start">
            <div className="rounded-[30px] bg-[url('assets/images/HeroImage3.jpeg')] bg-center bg-cover bg-no-repeat w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] mx-4"></div>
            <div className="rounded-[30px] bg-[url('assets/images/HeroImage2.jpeg')] bg-center bg-cover bg-no-repeat w-[265px] h-[256px] lg:w-[265px] lg:h-[265px] mx-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
