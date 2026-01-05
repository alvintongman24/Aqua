
"use client";
import React from "react";
import { GraduationCap } from 'lucide-react';
import { Briefcase,Globe  } from 'lucide-react';
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Firstsection() {

    

      return (
     
               <section className="md:my-20">
                   
               <section className=" md:flex justify-between gap-8  items-center   text-amber-50 pt-5 shadow-2xl rouneded-md">
                   <div class="gallery-container relative mx-auto w-full max-w-lg h-[500px] md:h-[600px] mb-20 hidden md:block">
            {/* <!-- First image (back) --> */}

             <div class="stack-item absolute w-2/3 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-2/3 z-20">
                
                
                     <img src="https://www.criminon.org/wp-content/uploads/2024/01/prisoner-in-dark-tn.jpg" 
                     alt="Man with beard" 
                     class="w-full h-full object-cover"/>
               
            </div>
            
            {/* <!-- Second image (middle) --> */}
            <div class="stack-item absolute w-2/3 left-0 bottom-0 h-2/3 z-10">

                     <img src="https://i.fbcd.co/products/resized/resized-750-500/c-1000-2-african-girl-laughing-06-05-3d6bc9b39baf188d1e320bda6942caf1011d42760196ef0ddca3e26296de21f3.jpg" 
                     alt="Man in casual clothing" 
                     class="w-full h-full object-cover"/>
               
            </div>
            
            {/* <!-- Third image (front) --> */}
            <div class="stack-item absolute w-2/3 right-0 top-0 h-2/3 z-30">
                     <img src="https://media.licdn.com/dms/image/v2/D4D12AQHJiFtxsmhKzg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684840864116?e=2147483647&v=beta&t=0rdPI7nwMzLF60ulTuEs6vLKyI7q3N6s5g11l_SXC20" 
                     alt="Woman smiling" 
                     class="w-full h-full object-cover"/>
               
            </div>
        </div>
        
        {/* <!-- Info section --> */}
        <div class="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8  border border-gray-200 rounded-2xl p-8 shadow-lg  mx-auto">
            <h2 class="text-lg md:text-3xl font-bold font-serif text-gray-800 mb-6 ">About Us</h2>
           
            
            <div class="text-gray-700 max-w-2xl mx-auto font-sans leading-relaxed">
    <div class="">
        <div class="flex items-center mb-6">
            <div class="w-6 h-6 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                <svg class="w-2 h-2 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
            </div>
            <h3 class="text-md md:text-2xl font-bold text-blue-900 font-serif">Our Purpose</h3>
        </div>
        
        <div class="space-y-4 leading-tight">
            <p class="text-md md:text-lg md:text-xl text-gray-800 font-medium italic border-l-4 border-blue-500 pl-4 py-2 bg-white/50 rounded-r">
                Aqua Foundation is a dedicated non-profit organization committed to saving humanity by providing vital support to society's most vulnerable
            </p>
            
            <p class="text-md md:text-lg text-gray-600 ">
                We focus on delivering <span class="font-semibold text-blue-700">sustainable aid</span> that creates lasting change rather than temporary relief. Through carefully designed programs in <span class="font-semibold text-emerald-700">education, healthcare, and economic empowerment</span>, we address both immediate needs and long-term solutions.
            </p>
             
            <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <p class="text-md md:text-lg text-gray-700">
                    Our approach combines <span class="font-bold text-amber-600">compassion</span> with <span class="font-bold text-blue-600">strategic action</span>, working to restore dignity, hope, and opportunity where they're needed most.
                </p>
            </div>
            
            <p class=" text-gray-600">
                We believe every human being deserves access to basic necessities, education, and pathways to a better future. By empowering individuals and strengthening communities, we aim to break the cycle of poverty and build a foundation for enduring prosperity.
            </p>
            
            <div class="text-center py-4">
                <div class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <p class="text-[8px] md:text-lg">Together, we're creating ripples of positive change</p>
                    <p class="text-[8px] opacity-90 mt-1">toward a brighter tomorrow for all</p>
                </div>
            </div>
        </div>
    </div>
</div>
           
        </div>

                   
               </section>
                   
                  </section>
   
      )
}
