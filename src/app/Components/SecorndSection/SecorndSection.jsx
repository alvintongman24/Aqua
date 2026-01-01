
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
                   
               <section className=" md:flex justify-end items-end   bg-black/50 text-amber-50 pt-5 shadow-2xl rouneded-md">
                   <div class="gallery-container relative mx-auto w-full max-w-lg h-[500px] md:h-[600px] mb-20">
            {/* <!-- First image (back) --> */}
            <div class="stack-item absolute w-4/5 left-0 bottom-0 h-4/5 z-10">
                <img src="https://www.criminon.org/wp-content/uploads/2024/01/prisoner-in-dark-tn.jpg" 
                     alt="Man with beard" 
                     class="w-full h-full object-cover"/>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                   
                </div>
            </div>
            
            {/* <!-- Second image (middle) --> */}
            <div class="stack-item absolute w-4/5 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-4/5 z-20">
                <img src="https://media.licdn.com/dms/image/v2/D4D12AQHJiFtxsmhKzg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684840864116?e=2147483647&v=beta&t=0rdPI7nwMzLF60ulTuEs6vLKyI7q3N6s5g11l_SXC20" 
                     alt="Woman smiling" 
                     class="w-full h-full object-cover"/>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    
                </div>
            </div>
            
            {/* <!-- Third image (front) --> */}
            <div class="stack-item absolute w-4/5 right-0 top-0 h-4/5 z-30">
                <img src="https://i.fbcd.co/products/resized/resized-750-500/c-1000-2-african-girl-laughing-06-05-3d6bc9b39baf188d1e320bda6942caf1011d42760196ef0ddca3e26296de21f3.jpg" 
                     alt="Man in casual clothing" 
                     class="w-full h-full object-cover"/>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                   
                </div>
            </div>
        </div>
        
        {/* <!-- Info section --> */}
        <div class="bg-purple-100/50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
           
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                <motion.div initial={{ opacity: 0, x: 100 }}  variants={container} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} class="text-center p-6 rounded-xl bg-blue-50 md:h-full h-75 md:w-full w-35 text-[8px] md:text-lg" >
                    <div class="text-blue-500 text-3xl mb-4">
                        
                    </div>
                    <h3 class="font-semibold  mb-2 text-black flex justify-center items-center"> <GraduationCap className="text-purple-600 md:w-8 md:h-8 " />Mission Statement</h3>
                    <p class="text-gray-600 text-left  ">The Aqua Foundation for Widows, Orphans, and Prisoners (WOP) is dedicated to improving the lives of vulnerable populations by providing essential resources such as clean water, education, and support services. .</p>
                </motion.div >
                
                <motion.div initial={{ opacity: 0, translateX:"-100%" }}  variants={container} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 2 }} class="text-center p-4 rounded-xl bg-purple-50 md:h-full h-75 md:w-full w-35 text-[8px] md:text-lg">
                    <div class="text-purple-500 text-3xl mb-4">
                        <i class="fas fa-expand"></i>
                    </div>
                    <h3 class="font-semibold md:text-lg mb-2 text-black flex justify-center items-center"><Briefcase className="md:w-8 md:h-8 text-purple-600" />Vision Statement</h3>
                    <p class="text-gray-600 text-left">Our vision is to create a world where every widow, orphan, and prisoner has access to the resources and support they need to thrive. We envision communities where these vulnerable populations are empowered to rebuild their lives, contribute positively to society, and break the cycle of poverty. Through our initiatives, we aim to inspire hope, foster resilience, and promote social justice for all.</p>
                </motion.div>
                
                < motion.div initial={{ opacity: 0, x: 100 }}  variants={container} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}  class="text-center p-6 rounded-xl bg-teal-50 md:h-full h-85 md:w-full w-35 text-[8px] md:text-lg">
                    <div class="text-teal-500 text-3xl mb-4">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="font-semibold md:text-lg mb-2 text-black flex justify-center items-center"><Globe className="md:w-8 md:h-8 text-purple-600" title="Global community" />Our Community</h3>
                    <p class="text-gray-600 text-left">We are committed to building a strong, supportive community for widows, orphans, and prisoners. Through collaboration with local organizations, volunteers, and community leaders, we aim to create a network of care and support that addresses the unique needs of these vulnerable populations. Together, we can foster a sense of belonging and empowerment, ensuring that no one is left behind.</p>
                </motion.div>
            </div>
            
           
        </div>

                   
               </section>
                   
                  </section>
   
      )
}
