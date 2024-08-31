import React from 'react';
import logo from '../assets/images/logo-white.png'; 
import Insta from '../assets/images/insta.png'; 
import Facebook from '../assets/images/facebook.png'; 
import Linkdin from '../assets/images/linkdn.png'; 
import Tiktok from '../assets/images/tiktok.png'; 
import './Footer.css';

function Footer() {
  return (
    <div className="footer-section">
            <div className="bg-[#A60303] flex flex-col lg:flex-row w-full box-sizing-border">
                <div className="m-[0_158.9px_0_0] flex flex-col box-sizing-border">
                <img className="m-[0_0_20px_0] self-start w-[250px] h-[150px]" src={logo} />
                <div className="m-[0_0_20px_0] flex flex-col w-[fit-content] box-sizing-border">
                    <div className="m-[0_0_8px_0] inline-block break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                    Copyright © 2024 Terra Origin Ltd
                    </div>
                    <span className="self-start break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                    All rights reserved
                    </span>
                </div>
                <div className="m-[0_2px_0_2px] flex flex-row self-start w-[144px] box-sizing-border">
                    <div className="m-[2px_20px_2px_0] flex w-[24px] h-[24px] box-sizing-border">
                    <img className="w-[20px] h-[19.9px]" src={Facebook} />
                    </div>
                    <div className="m-[2px_22.2px_2px_0] flex w-[24px] h-[24px] box-sizing-border">
                    <img className="w-[20px] h-[20px]" src={Insta} />
                    </div>
                    <div className="m-[3px_20.2px_3px_0] flex w-[24px] h-[24px] box-sizing-border">
                    <img className="w-[15.7px] h-[18px]" src={Tiktok} />
                    </div>
                    <div className="flex w-[24px] h-[24px] box-sizing-border">
                    <img className="w-[24px] h-[24px]" src={Linkdin} />
                    </div>
                </div>
                </div>
                <div className="m-[20px_0_52px_0] flex flex-row box-sizing-border">
                <div className="m-[6px_42.3px_8px_0] flex flex-col box-sizing-border">
                    <div className="m-[0_0_16px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#F2EEE9]">
                    Contact Info
                    </div>
                    <span className="break-words text-left font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                    Terra Origin INC<br />
                    3, Bayo Adeshiyan Avenue,<br />
                    Ajah, Lagos<br />
                    <br />
                    Mon-Fri 9am-6pm
                    </span>
                </div>
                <div className="m-[0_49px_0_0] flex flex-col box-sizing-border">
                    <div className="m-[0_0_24px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-[var(--title-small,700)] text-[24px] text-[#F2EEE9]">
                    Quick Links
                    </div>
                    <div className="flex flex-col w-[fit-content] box-sizing-border">
                    <div className="m-[0_0_12px_0] inline-block break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                        Register Account
                    </div>
                    <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                        Log In
                    </div>
                    <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                        Blog
                    </div>
                    <span className="self-start break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                        Contact Us
                    </span>
                    </div>
                </div>
                <div className="m-[0_0_12px_0] flex flex-col box-sizing-border">
                    <div className="m-[0_0_24px_0] inline-block self-start break-words font-['Plus_Jakarta_Sans'] font-[var(--title-small,700)] text-[24px] text-[#F2EEE9]">
                    Service
                    </div>
                    <div className="flex flex-col w-[fit-content] box-sizing-border">
                    <div className="self-start inline-block break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                        Curated Tours
                    </div>
                    <div className="self-start inline-block break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                        Booking Engine
                    </div>
                    <span className="self-start break-words font-['Lato'] font-[var(--body-1-font-weight,400)] text-[20px] tracking-[var(--body-1-letter-spacing,1px)] leading-[var(--body-1-line-height,1.5)] text-[#F2EEE9]">
                        Customised Itineraries
                    </span>
                    </div>
                </div>
                </div>
            </div>
    </div>
  );
}

export default Footer;
