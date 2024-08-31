import React from 'react';
import './Service.css'; // Assuming you move the images and styles to this CSS file

function Service() {
  return (
    <div className="service-section">
      <div className="flex flex-col w-fit box-border">
        <div className="mb-30 flex flex-col self-start w-fit box-border">
          <div className="mb-4 self-start text-green-700 font-plusJakartaSans font-bold text-2xl tracking-widest">
            SERVICES
          </div>
          <span className="font-plusJakartaSans font-bold text-4xl text-gray-900">
            Why book using Terra
          </span>
        </div>

        {/* Main Service Items */}
        <div className="flex flex-col items-center w-fit box-border service-content">
          {/* First Row: Curated Tours */}
          <div className="mb-35 flex flex-row w-fit box-border">
            <div className="relative w-[580px] h-[465px] box-border">
              <div className="rounded-lg bg-rectangle83 relative w-[350px] h-[350px]"></div>
              <div className="backdrop-blur-md rounded-lg border-4 border-white bg-rectangle94 absolute right-0 bottom-0 w-[350px] h-[350px]"></div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 items-center box-border mx-4">
              <div className="mb-8 text-center">
                <div className="mb-6 font-plusJakartaSans font-bold text-3xl text-gray-900">
                  Curated Tours
                </div>
                <span className="font-lato text-lg leading-relaxed text-gray-600">
                  Discover meticulously planned itineraries tailored to your interests. Our expert curators select the best attractions, accommodations, and local experiences. Enjoy hassle-free travel while immersing yourself in authentic Africa destinations.
                </span>
              </div>
              <div className="rounded-full bg-red-700 py-5 px-8 text-white font-lato font-semibold text-xl">
                Tour Now
              </div>
            </div>
          </div>

          {/* Second Row: Booking Engine */}
          <div className="mb-35 flex flex-row w-fit box-border">
            <div className="flex flex-col w-full lg:w-1/2 items-center box-border mx-4">
              <div className="mb-8 text-center">
                <div className="mb-6 font-plusJakartaSans font-bold text-3xl text-gray-900">
                  Booking Engine
                </div>
                <span className="font-lato text-lg leading-relaxed text-gray-600">
                  Secure tickets to unforgettable events, from cultural festivals to sporting matches. Discover hidden gems and immerse yourself in the vibrant African scene. Conveniently book your tickets through our app and create lasting memories.
                </span>
              </div>
              <div className="rounded-full bg-red-700 py-5 px-8 text-white font-lato font-semibold text-xl">
                Book Now
              </div>
            </div>
            <div className="relative w-[580px] h-[465px] box-border">
              <div className="rounded-lg bg-rectangle84 relative w-[350px] h-[350px]"></div>
              <div className="backdrop-blur-md rounded-lg border-4 border-white bg-rectangle92 absolute right-0 bottom-0 w-[350px] h-[350px]"></div>
            </div>
          </div>

          {/* Third Row: Customised Itineraries */}
          <div className="flex flex-row w-fit box-border">
            <div className="relative w-[580px] h-[465px] box-border">
              <div className="rounded-lg bg-rectangle91 relative w-[350px] h-[350px]"></div>
              <div className="backdrop-blur-md rounded-lg border-4 border-white bg-rectangle81 absolute right-0 bottom-0 w-[350px] h-[350px]"></div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 items-center box-border mx-4">
              <div className="mb-8 text-center">
                <div className="mb-6 font-plusJakartaSans font-bold text-3xl text-gray-900">
                  Customised Itineraries
                </div>
                <span className="font-lato text-lg leading-relaxed text-gray-600">
                  Create personalised travel plans that perfectly align with your preferences and interests. Our flexible platform allows you to design itineraries tailored to your unique desires, ensuring a truly unforgettable Africa travel experience.
                </span>
              </div>
              <div className="rounded-full bg-red-700 py-5 px-8 text-white font-lato font-semibold text-xl">
                Customise Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
