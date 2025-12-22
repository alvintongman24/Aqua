
"use client";
import { motion } from "framer-motion";
import React from "react";


export default function Firstsection() {

      return (
     
               <section className="md:m-34 m-10">
                   
               <section className=" md:flex justify-end items-end">
                   <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}   className="rounded-2xl  border  ">
  <img src="https://media.gettyimages.com/id/1142857507/photo/hands-of-poor-african-children-asking-for-drinking-water.jpg?s=612x612&w=0&k=20&c=Isc7kqYXlMuQfX6t1b9inINX-ElgClZkT3tMv41sXW0=" alt="Description of the image" className="rounded-lg" />
</motion.div>

                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="   bg-black/50 md:w-[650px] md:h-[350px] italic text-amber-50 sm:text-lg md:text-2xl text-center">
                         <h1 className="md:text-4xl md:p-10  "> THE AQUA FOUNDATION FOR WIDOWS, ORPHANS AND PRISONERS</h1>
                         <p className="md:text-2xl md:p-10 text-red-100 ">(WOP)</p>
                         
                    </motion.div>
               </section>
                   
                  </section>
   
      )
}
