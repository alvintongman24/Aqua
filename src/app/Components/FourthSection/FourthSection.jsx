// components/Navbar.jsx
"use client";


import React from "react";
import { 
  CircleDot
} from 'lucide-react';



export default function FourthSection() {

      return (
     
                <section className="md:m-34 mt-10">
                    <div className=" text-3xl font-bold text-center text-amber-50 mb-10">
                        <h1>KEY ACHIEVEMENTS</h1>
                    </div>
                   <div className=" md:flex justify-center items-center  md:gap-10 ">
                    <div className="flex  items-center text-left   bg-black/50  italic text-amber-50 sm:text-lg md:text-2xl text-center md:p-5 p-2 rounded-2xl shadow-2xl">
                        <p>The Aqua Foundation is dedicated to uplifting the most vulnerable in society — widows, orphans, prisoners, the destitute, and the poorest of the poor. We exist to provide access to healthcare, education, welfare support, legal aid, and sustainable empowerment opportunities. Our mission is rooted in charity, compassion, and collective action, ensuring that poverty is reduced and dignity is restored. Regardless of ethnicity, religion, race, gender, or nationality, we believe that by joining hands, we can meet the needs of many, inspire hope, and create a pathway to a better life for those society often overlooks.

Our vision is to build a society where no one is denied the basic needs of life — food, shelter, education, water, healthcare, justice, and dignity. We seek to restore hope to those who feel all is lost, empower the disadvantaged, and provide legal aid to victims of injustice. Through community outreach, data-driven interventions, and partnerships, we strive to address prioritized needs such as clean water, school facilities, healthcare infrastructure, correctional welfare, and post-prison reintegration. The Aqua Foundation envisions a future where vulnerable individuals and communities are empowered to not only survive but to thrive — with smiles restored, rights protected, and lives transformed..</p>
                    </div>
                    </div>

                     <section class="container mx-auto p-4">
      <h2 class="text-xl font-semibold">COMMENTS</h2>
      <section
        class="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        
        <div class="border p-4 rounded-md flex gap-4">
          <div class="text-white p-4 rounded-md shadow-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxMUc_2D0YRzfmsaVQb5aE3pfTFXRowyngA&s"
              height="30"
              width="50"
              alt=""
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">Robert James the 3rd</h3>
            <p class="font-light text-sm">
              Significant reductions in global hunger could become achievable in the coming years
            </p>
          </div>
        </div>
       
        <div class="border p-4 rounded-md flex gap-4">
          <div class="text-white p-4 rounded-md shadow-2xl">
            <img
              src="https://media.istockphoto.com/id/1934746708/photo/confident-businessman-wearing-suit-and-tie-agains-isolated-background.jpg?s=612x612&w=0&k=20&c=dAReSxSosKRXvIqMl6xdjaIwd12IB72lLuo0ovHNbGo="
              height="30"
              width="50"
              alt=""
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">Thomos Bratt</h3>
            <p class="font-light text-sm">
              we're moving toward a future where food security becomes a reality for more 
    communities worldwide.
            </p>
          </div>
        </div>
      
        <div class="border p-4 rounded-md flex gap-4">
          <div class="text-white p-4 rounded-md shadow-2xl">
            <img
              src="https://snworksceo.imgix.net/ame-egl/82590b2d-2891-4e8e-a5b0-8f5594740c92.sized-1000x1000.jpg?w=1000"
              height="30"
              width="50"
              alt=""
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold">H wellson</h3>
            <p class="font-light text-sm">
             The prospect of reduced global hunger in the coming years represents a remarkable 
    achievement in human progress. 
            </p>
          </div>
        </div>
      </section>
      <label for="comments">COMMENT YOUR OPINION</label>
      <input
        type="text"
        placeholder="comment"
        class="border border-2 border-black rounded w-64 h-32 p-5"
      />
    </section>

    <div  class="space-y-10  bg-gray-100 md:p-10 p-1  rounded-2xl shadow-2xl mt-20">
       <div id="contact" class="bg-transparent rounded-2xl shadow-xl md:p-8 p-0 w-full border border-gray-100">
                    <h2 class="text-3xl text-center font-bold text-black mb-2">Send us a message</h2>
                    <p class="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                    
                    <form class="space-y-6"   action="mailto:Zemgloballtd@gmail.com" method="POST">
                      
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="firstName" class="block text-black font-medium mb-2">First Name</label>
                                <input required type="text" id="firstName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="John"/>
                            </div>
                            <div>
                                <label for="lastName" class="block text-black font-medium mb-2">Last Name</label>
                                <input required  type="text" id="lastName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Doe"/>
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-black font-medium mb-2">Email Address</label>
                            <input required type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="john.doe@example.com"/>
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-black font-medium mb-2">Phone Number</label>
                            <input required  type="tel" id="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="+1 (555) 123-4567"/>
                        </div>
                        
                        <div>
                            <label for="service" class="block text-black font-medium mb-2">Service Interested In</label>
                            <select required  id="service" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                                <option value="">Select a service</option>
                                <option value="web">Donate</option>
                                <option value="mobile">Ideas</option>
                                <option value="cloud">Recuite</option>
                                <option value="design">Complait</option>
                                <option value="other">Assistance</option>
                            </select>
                        </div>
                        
                        <div>
                            <label required for="message" class="block text-black font-medium mb-2">Your Message</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
                        </div>
                        
                        <button type="submit"  class="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                            <span>Send Message</span>
                            <i class="fas fa-paper-plane ml-2"></i>
                        </button>
                    </form>
                </div>
                    <div >
                        <h2  class="text-3xl font-bold text-black mb-6">Contact Information</h2>
                        <p class="text-gray-600 mb-8">We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
                    </div>
                    
                   
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-map-marker-alt text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-black mb-1">Our Office</h3>
                                <p class="text-gray-600">17 Wole Soyinka Street, Setraco, Gwarinpa, Abuja.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-phone text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-black mb-1">Instagram</h3>
                                <p class="text-gray-600">📸 Instagram: https://instagram.com/aqua_foundation_wop</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-envelope text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-black mb-1">Email Address</h3>
                                <p class="text-gray-600">📘 Email: officialaquafoundation@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    
                   
                    <div class="pt-6">
                        <h3 class="text-xl font-bold text-black mb-4">Follow Us</h3>
                        <div class="flex space-x-4">
                            <a  href="https://instagram.com/aqua_foundation_wop" target="_blank" class="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                               <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbnN0YWdyYW0iPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIgcng9IjUiIHJ5PSI1Ii8+PHBhdGggZD0iTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3oiLz48bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUxIiB5MT0iNi41IiB5Mj0iNi41Ii8+PC9zdmc+"
                class="py-2"
                alt=""
              />
                            </a>
                            <a  href="https://facebook.com/aqua_foundation_wop" target="_blank" class="w-12 h-12 text-blue-400 font-black bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                               <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mYWNlYm9vayI+PHBhdGggZD0iTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3oiLz48L3N2Zz4="
                class="px-4 py-2"
                alt=""
              />
                            </a>
                            <a  href="https://x.com/aqua_foundation_wop" target="_blank" class="w-12 h-12 bg-black text-red-300 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                                 <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10d2l0dGVyIj48cGF0aCBkPSJNMjIgNHMtLjcgMi4xLTIgMy40YzEuNiAxMC05LjQgMTcuMy0xOCAxMS42IDIuMi4xIDQuNC0uNiA2LTJDMyAxNS41LjUgOS42IDMgNWMyLjIgMi42IDUuNiA0LjEgOSA0LS45LTQuMiA0LTYuNiA3LTMuOCAxLjEgMCAzLTEuMiAzLTEuMnoiLz48L3N2Zz4="
                class="px-4 py-2"
                alt=""
              />
                            </a>
                           
                        </div>
                    </div>
                    
                   
                    <div class="bg-blue-50 rounded-xl p-6 mt-8">
                        <h3 class="text-xl font-bold text-black mb-4">Frequently Asked Questions</h3>
                        <div class="space-y-4">
                            <div>
                                <h4 class="font-medium text-black">How quickly do you respond to inquiries?</h4>
                                <p class="text-gray-600 text-sm">We typically respond within 2-4 hours during business hours.</p>
                            </div>
                            <div>
                                <h4 class="font-medium text-black">Do you offer free consultations?</h4>
                                <p class="text-gray-600 text-sm">Yes, we offer a free 30-minute consultation for new projects.</p>
                            </div>
                            <div>
                                <h4 class="font-medium text-black">What are your working hours?</h4>
                                <p class="text-gray-600 text-sm">Our team is available Monday-Friday, 9am-6pm PST.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                </section>

                
      )
}
