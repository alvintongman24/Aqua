// components/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0  lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="https://instagram.com/aqua_foundation_wop" className="flex items-center">
          {/* <!-- From Uiverse.io by vinodjangid07 -->  */}
<button class="Btn">
 <span class="svgContainer">
   <svg fill="white" class="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
 </span>
 <span class="BG"></span>
</button>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="https://x.com/aqua_foundation_wop" className="flex items-center">
          {/* <!-- From Uiverse.io by mRcOol7 -->  */}
<button class="Btntwit">
    <span class="svgContainertwit">
      <svg
        viewBox="0 0 512 512"
        height="1.7em"
        xmlns="http://www.w3.org/2000/svg"
        class="svgIcontwit"
        fill="white"
      >
        <path
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        ></path>
      </svg>
    </span>
    <span class="BGtwit"></span>
  </button>

        </a>

        

       
      </Typography>
      
    </ul>
  );

  return (
    <MTNavbar className="sticky top-0 z-10 m-0 h-max max-w-full rounded-none px-4 py-2  border border-transparent bg-transparent  backdrop-blur-md ">
      <div className="flex items-center justify-between text-blue-gray-900">
       <div className="mr-4 hidden lg:block">{navList}</div>
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 flex items-center text-xs md:text-4xl md:max-w-4xl  font-extrabold text-center md:widest-words text-blue-black"
        >
        Aqua <img src="logo.png" width="50px" height="50px" alt="" srcset=""></img>  Foundation
        </Typography>
        <div className="flex items-center gap-4">
         
          <div className="flex items-center gap-x-1 sm:text-xs md:text-6xl">
            <Button
              variant="text"
              size="sm"
              className="hidden lg:inline-block sm:text-xs md:text-3xl "
            >
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="buttonr hover:shadow-2xl">Contact</button>
            </Button>
           
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
         
         
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'  // Ensures it aligns to top of viewport
          })}  class="buttonr">Contact</button>
        
        </div>
      </MobileNav>
    </MTNavbar>
  );
}