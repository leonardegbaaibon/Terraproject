import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="flex flex-col lg:flex-row w-full box-sizing-border">
        <div className="mt-16 lg:mt-[228px] lg:mr-[21.6px] flex flex-col items-start lg:w-1/2 box-sizing-border px-4 lg:px-0">
          <div className="m-[0_0_55.5px_0] flex flex-col items-start w-[fit-content] box-sizing-border">
            <div className="m-[0_2.4px_25.5px_0] flex flex-col w-[fit-content] box-sizing-border">
              <p className="m-[0_0_10px_0] inline-block self-start break-words font-bold text-[24px] tracking-[7.2px] text-[#0D7309] text-left plus-jakarta">
                TERRA
              </p>
              <span className="break-words font-bold text-[44px] text-[#1C1C1C] text-left plus-jakarta">
                We offer diversified tourism<br />
                destinations in Africa
              </span>
            </div>
            <span className="break-words text-[20px] tracking-[1px] leading-[1.5] text-[#5B5B5B] text-left lato">
              Hey! Terra is here to help you find your dream African holiday. Easy you just find where you want to go and buy the ticket.
            </span>
          </div>
          <div className="m-[0_0_0_0] flex flex-col items-start w-[560px] box-sizing-border">
            <div className="m-[0_0_30px_0] flex flex-row w-[560px] box-sizing-border items-start">
              <div className="rounded-[30px] border-[1px_solid_#1C1C1C] bg-[#FFFFFF] m-[0_120px_0_0] flex flex-col justify-center items-left w-[220px]">
                <div className="m-[0_0_20px_0.5px] inline-block break-words font-bold text-[36px] leading-[0.833] text-[#0D7309] plus-jakarta">
                  5+
                </div>
                <span className="break-words text-[20px] tracking-[1px] leading-[1.5] text-[#5B5B5B] lato">
                  Curated Package
                </span>
              </div>
              <div className="rounded-[30px] border-[1px_solid_#1C1C1C] bg-[#FFFFFF] flex flex-col justify-center items-center w-[220px]">
                <div className="m-[0_0.4px_20px_0] inline-block break-words font-bold text-[36px] leading-[0.833] text-[#0D7309] plus-jakarta">
                  50+
                </div>
                <span className="break-words text-[20px] tracking-[1px] leading-[1.5] text-[#5B5B5B] lato">
                  Activities
                </span>
              </div>
            </div>
            <div className="flex flex-row w-[560px] box-sizing-border">
              <div className="rounded-[30px] border-[1px_solid_#1C1C1C] bg-[#FFFFFF] m-[0_120px_0_0] flex flex-col justify-center items-center w-[220px]">
                <div className="m-[0_0_20px_0] inline-block break-words font-bold text-[36px] leading-[0.833] text-[#0D7309] plus-jakarta">
                  20+
                </div>
                <span className="break-words text-[20px] tracking-[1px] leading-[1.5] text-[#5B5B5B] lato">
                  Events
                </span>
              </div>
              <div className="rounded-[30px] border-[1px_solid_#1C1C1C] bg-[#FFFFFF] flex flex-col justify-center items-center w-[220px]">
                <div className="m-[0_0_20px_0.1px] inline-block break-words font-bold text-[36px] leading-[0.833] text-[#0D7309] plus-jakarta">
                  20+
                </div>
                <span className="break-words text-[20px] tracking-[1px] leading-[1.5] text-[#5B5B5B] lato">
                  African Locations
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex p-[240px_0_0_0] w-[708px] h-[849px] box-sizing-border">
          <div className="rounded-l-[300px] bg-[rgba(166,3,3,0.8)] relative w-[708px] h-[609px]">
          </div>
          <div className="rounded-t-[200px] rounded-r-[200px] bg-[url('assets/images/PexelsPhotoByAlenaShekhovtcova.png')] bg-[50%_50%] bg-cover bg-no-repeat absolute top-[0px] right-[84px] w-[436px] h-[829px]">
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
