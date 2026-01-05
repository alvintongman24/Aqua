
"use client";
import { motion } from "framer-motion";
import React from "react";


export default function Firstsection() {

      return (
     
             <section className="md:m-34 m-1">
  <motion.div 
    initial={{ opacity: 0, scale: 0 }} 
    whileInView={{ opacity: 1, scale: 1 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.4 }} 
    className="rounded-2xl shadow-2xl overflow-hidden relative"
  >
    {/* Background Image Container */}
    <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden">
      {/* Background Image with Overlay */}
      <img 
        src="https://media.gettyimages.com/id/1142857507/photo/hands-of-poor-african-children-asking-for-drinking-water.jpg?s=612x612&w=0&k=20&c=Isc7kqYXlMuQfX6t1b9inINX-ElgClZkT3tMv41sXW0=" 
        alt="African children asking for drinking water" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      
     

      {/* Text Content Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }} 
        className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16"
      >
           <p className="text-white flex-col justify-left inline-block w-fit font-semibold border rounded-full border-transparent bg-blue-900 text-[12px] md:text-3xl py-2 px-4  md:px-6 md:py-3 mb-4 drop-shadow-lg">
  OUR MISSION
</p>
        <h1 className="text-2xl md:text-5xl font-bold font-serif text-white mb-2 drop-shadow-lg">
          Restoring Hope & Rebuilding Lives
        </h1>
        <p className="text-[8px] md:text-lg font-normal font-serif italic text-white drop-shadow-lg">
         Empowering the vulnerable through essential supports, education and rehabitation...
        </p>
      </motion.div>
    </div>
  </motion.div>
</section>
   
      )
}
