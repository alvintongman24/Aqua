// components/Navbar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { CircleDot } from 'lucide-react';

export default function FourthSection() {
  const [Donate, setDonate] = useState('');
  const [Email, setEmail] = useState('');
  const [paystackLoaded, setPaystackLoaded] = useState(false);
  const paystackRef = useRef(null);

  // Load Paystack only on client side
  useEffect(() => {
    const loadPaystack = async () => {
      try {
        // Dynamically import Paystack (client-side only)
        const PaystackModule = await import('@paystack/inline-js');
        
        // Get the Paystack constructor
        const PaystackPop = PaystackModule.default || PaystackModule.PaystackPop;
        
        if (PaystackPop) {
          paystackRef.current = PaystackPop;
          setPaystackLoaded(true);
        }
      } catch (error) {
        console.error('Failed to load Paystack:', error);
        // Fallback to CDN if module fails
        if (window.PaystackPop) {
          paystackRef.current = window.PaystackPop;
          setPaystackLoaded(true);
        } else {
          // Load from CDN
          const script = document.createElement('script');
          script.src = 'https://js.paystack.co/v1/inline.js';
          script.async = true;
          script.onload = () => {
            paystackRef.current = window.PaystackPop;
            setPaystackLoaded(true);
          };
          document.body.appendChild(script);
        }
      }
    };

    loadPaystack();
  }, []);

  const handlePaystackPayment = (e) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!Donate || !Email) {
      alert('Please enter donation amount and email address');
      return;
    }

    // Check if Paystack is loaded
    if (!paystackLoaded || !paystackRef.current) {
      alert('Payment system is still loading. Please wait.');
      return;
    }

    try {
      // Create instance and process payment
      const paystackInstance = new paystackRef.current();
      
      paystackInstance.newTransaction({
        key: 'pk_test_2db10eff119fe2cc5679d421526f7dfcb3dc4c43',
        amount: Donate * 100,
        email: Email,
        ref: `AQUA_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        onSuccess: (transaction) => {
          alert('Payment successful! Transaction reference: ' + transaction.reference);
          // Reset form
          setDonate('');
          setEmail('');
        },
        onCancel: () => {
          alert('Payment cancelled');
        },
      });
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed: ' + error.message);
    }
  };

  // Rest of your component remains the same...
  return (


     <section className="md:m-34 mt-10">
                    <div className=" text-3xl font-bold text-center text-amber-50 mb-10">
                        <h1>KEY ACHIEVEMENTS</h1>
                    </div>
                   <div className=" md:flex justify-center items-center  md:gap-10 ">
                    <div className="flex  items-center text-left   bg-black/50  italic text-amber-50 sm:text-lg md:text-2xl text-center md:p-5 p-2 rounded-2xl shadow-2xl text-[10px] md:text-lg">
                        <p>The Aqua Foundation is dedicated to uplifting the most vulnerable in society — widows, orphans, prisoners, the destitute, and the poorest of the poor. We exist to provide access to healthcare, education, welfare support, legal aid, and sustainable empowerment opportunities. Our mission is rooted in charity, compassion, and collective action, ensuring that poverty is reduced and dignity is restored. Regardless of ethnicity, religion, race, gender, or nationality, we believe that by joining hands, we can meet the needs of many, inspire hope, and create a pathway to a better life for those society often overlooks.

Our vision is to build a society where no one is denied the basic needs of life — food, shelter, education, water, healthcare, justice, and dignity. We seek to restore hope to those who feel all is lost, empower the disadvantaged, and provide legal aid to victims of injustice. Through community outreach, data-driven interventions, and partnerships, we strive to address prioritized needs such as clean water, school facilities, healthcare infrastructure, correctional welfare, and post-prison reintegration. The Aqua Foundation envisions a future where vulnerable individuals and communities are empowered to not only survive but to thrive — with smiles restored, rights protected, and lives transformed..</p>
                    </div>
                    </div>

                     <section className="container mx-auto p-4">
      <h2 className="text-xl font-semibold">COMMENTS</h2>
      <section
        className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        
        <div className="border p-4 rounded-md flex gap-4">
          <div className="text-white p-4 rounded-md shadow-2xl">
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

        <div className="border p-4 rounded-md flex gap-4">
          <div className="text-white p-4 rounded-md shadow-2xl">
            <img
              src="https://media.istockphoto.com/id/1934746708/photo/confident-businessman-wearing-suit-and-tie-agains-isolated-background.jpg?s=612x612&w=0&k=20&c=dAReSxSosKRXvIqMl6xdjaIwd12IB72lLuo0ovHNbGo="
              height="30"
              width="50"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Thomos Bratt</h3>
            <p className="font-light text-sm">
              we're moving toward a future where food security becomes a reality for more 
    communities worldwide.
            </p>
          </div>
        </div>
      
        <div className="border p-4 rounded-md flex gap-4">
          <div className="text-white p-4 rounded-md shadow-2xl">
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

    <div  className="space-y-10  bg-gray-100 md:p-10 p-1  rounded-2xl shadow-2xl mt-20">
       <div id="contact" class="bg-transparent rounded-2xl shadow-xl md:p-8 p-0 w-full border border-gray-100">
                    <h2 class="text-3xl text-center font-bold text-black mb-5 font-serif ">Make Donation</h2>
                    
                    
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
                            <input required type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="john.doe@example.com"/>
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-black font-medium mb-2">Phone Number</label>
                            <input required  type="tel" id="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="+1 (555) 123-4567"/>
                        </div>
                        
                        <div>
                            <label for="service" class="block text-black font-medium mb-2" >DONATION AMOUNT</label>
                            <input placeholder="ex. N2000" type="number" value={Donate} onChange={(e) => setDonate(e.target.value)} required  id="service" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"/>
                             
                        </div>
                        
                        <div>
                            <label required for="message" class="block text-black font-medium mb-2">You can Message Us</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="You can keep track of how we use your donations by asking questions."></textarea>
                        </div>
                        
                        <button type="submit" onClick={handlePaystackPayment} class="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                            <span>DONATE NOW!!!</span>
                            <i class="fas fa-paper-plane ml-2"></i>
                        </button>
                    </form>
                </div>
                    <div class="relative">
    {/* <!-- Background decorative elements --> */}
    <div class="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 blur-xl"></div>
    <div class="absolute bottom-10 -right-6 w-32 h-32 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-full opacity-50 blur-xl"></div>
    
    <div class="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200/50 backdrop-blur-sm font-sans text-md md:text-lg">
        {/* <!-- Header with accent --> */}
        <div class="mb-10">
            <div class="inline-flex items-center mb-4">
                <div class="w-3 h-10 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full mr-3"></div>
                <h2 class="text-md md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent font-serif">
                    Contact Information
                </h2>
            </div>
            <p class="text-gray-600  max-w-xl ">We're here to help and answer any questions you might have. Reach out to us through any channel below.</p>
            
            {/* <!-- Contact badge --> */}
            <div class="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-md">
                <div class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span class="text-white text-sm font-semibold">24/7 Support Available</span>
            </div>
        </div>
        
        {/* <!-- Contact Cards Grid --> */}
        <div class="grid md:grid-cols-3 gap-6 mb-10">
            {/* <!-- Office Card --> */}
            <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div class="flex items-start mb-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-md md:text-2xl font-bold text-gray-900 mb-1">Our Office</h3>
                        <p class="text-sm text-blue-600 font-medium">📍 Abuja Headquarters</p>
                    </div>
                </div>
                <p class="text-gray-700 font-medium pl-1">17 Wole Soyinka Street</p>
                <p class="text-gray-600 pl-1">Setraco, Gwarinpa, Abuja</p>
                <div class="mt-4 pt-4 border-t border-gray-100">
                    <a href="https://maps.google.com/?q=17+Wole+Soyinka+Street+Setraco+Gwarinpa+Abuja" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                        </svg>
                        Get Directions
                    </a>
                </div>
            </div>
            
            {/* <!-- Instagram Card --> */}
            <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div class="flex items-start mb-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiByeD0iNSIgcnk9IjUiLz48cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIvPjxsaW5lIHgxPSIxNy41IiB4Mj0iMTcuNTEiIHkxPSI2LjUiIHkyPSI2LjUiLz48L3N2Zz4=" class="w-7 h-7" />
                    </div>
                    <div>
                        <h3 class="text-md md:text-2xl font-bold text-gray-900 mb-1">Instagram</h3>
                        <p class="text-sm text-pink-600 font-medium">📸 Follow Our Journey</p>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-gray-700 font-medium truncate">@aqua_foundation_wop</p>
                    <a href="https://instagram.com/aqua_foundation_wop" target="_blank" class="ml-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-shadow duration-300">
                        Follow
                    </a>
                </div>
                <div class="mt-4 flex items-center text-gray-500 text-sm">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                    </svg>
                    Daily updates & stories
                </div>
            </div>
            
            {/* <!-- Email Card --> */}
            <div class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div class="flex items-start mb-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-md md:text-2xl font-bold text-gray-900 mb-1">Email Address</h3>
                        <p class="text-sm text-amber-600 font-medium">📧 Quick Response</p>
                    </div>
                </div>
                <div class="bg-amber-50 rounded-xl p-3 mb-3">
                    <p class="text-gray-800 font-mono text-sm break-all">officialaquafoundation@gmail.com</p>
                </div>
                <a href="mailto:officialaquafoundation@gmail.com" class="inline-flex items-center w-full justify-center px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Send Email
                </a>
            </div>
        </div>
        
        {/* <!-- Social Media Section --> */}
        <div class="mb-10">
            <div class="flex items-center mb-6">
                <div class="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <h3 class="text-md md:text-2xl font-bold text-gray-900 font-serif ">Connect With Us</h3>
                <div class="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://instagram.com/aqua_foundation_wop" target="_blank" class="group relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div class="absolute -right-6 -top-6 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div class="relative flex items-center">
                        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0idy04IGgtOCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiByeD0iNSIgcnk9IjUiLz48cGF0aCBkPSJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3eiIvPjxsaW5lIHgxPSIxNy41IiB4Mj0iMTcuNTEiIHkxPSI2LjUiIHkyPSI2LjUiLz48L3N2Zz4=" class="w-8 h-8" />
                        </div>
                        <div>
                            <h4 class="text-md md:text-2xl font-bold font-serif text-white">Instagram</h4>
                            <p class="text-white/80 text-sm">Daily Impact Stories</p>
                        </div>
                    </div>
                    <div class="mt-4 flex items-center text-white/90">
                        <span class="text-sm">Follow for real-time updates</span>
                        <svg class="w-5 h-5 ml-auto group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </div>
                </a>
                
                <a href="https://facebook.com/aqua_foundation_wop" target="_blank" class="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div class="absolute -left-6 -bottom-6 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div class="relative flex items-center">
                        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3oiLz48L3N2Zz4=" class="w-8 h-8" />
                        </div>
                        <div>
                            <h4 class="text-md md:text-2xl font-bold font-serif text-white">Facebook</h4>
                            <p class="text-white/80 text-sm">Community & Events</p>
                        </div>
                    </div>
                    <div class="mt-4 flex items-center text-white/90">
                        <span class="text-sm">Join our community</span>
                        <svg class="w-5 h-5 ml-auto group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </div>
                </a>
                
                <a href="https://x.com/aqua_foundation_wop" target="_blank" class="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div class="absolute -right-6 -bottom-6 w-20 h-20 bg-white/10 rounded-full"></div>
                    <div class="relative flex items-center">
                        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTIyIDRzLS43IDIuMS0yIDMuNGMxLjYgMTAtOS40IDE3LjMtMTggMTEuNiAyLjIuMSA0LjQtLjYgNi0yQzMgMTUuNS41IDkuNiAzIDVjMi4yIDIuNiA1LjYgNC4xIDkgNC0uOS00LjIgNC02LjYgNy0zLjggMS4xIDAgMy0xLjIgMy0xLjJ6Ii8+PC9zdmc+" class="w-8 h-8" />
                        </div>
                        <div>
                            <h4 class="text-md md:text-2xl font-bold font-serif text-white">Twitter/X</h4>
                            <p class="text-white/80 text-sm">News & Announcements</p>
                        </div>
                    </div>
                    <div class="mt-4 flex items-center text-white/90">
                        <span class="text-sm">Latest announcements</span>
                        <svg class="w-5 h-5 ml-auto group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
        
        {/* <!-- FAQ Section --> */}
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-2 md:p-8 shadow-inner border border-blue-100/50">
            <div class="flex items-center mb-8">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="text-md md:text-2xl font-bold font-serif text-gray-900 ">Frequently Asked Questions</h3>
                    <p class="text-gray-600">Quick answers to common questions</p>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div class="flex items-start">
                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <span class="text-blue-600 font-bold">Q1</span>
                        </div>
                        <div>
                            <h4 class="text-md md:text-2xl font-bold font-serif text-gray-900 mb-2 ">How quickly do you respond to inquiries?</h4>
                            <p class="text-gray-600 text-sm">We typically respond within 2-4 hours during business hours. For urgent matters, use our emergency contact line.</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div class="flex items-start">
                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <span class="text-blue-600 font-bold">Q2</span>
                        </div>
                        <div>
                            <h4 class="text-md md:text-2xl font-bold font-serif text-gray-900 mb-2">Do you offer consultations?</h4>
                            <p class="text-gray-600 text-sm">Yes, we offer free 30-minute consultations for new partnership opportunities and program inquiries.</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div class="flex items-start">
                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <span class="text-blue-600 font-bold">Q3</span>
                        </div>
                        <div>
                            <h4 class="text-md md:text-2xl font-bold font-serif text-gray-900 mb-2">What are your working hours?</h4>
                            <p class="text-gray-600 text-sm">Our team is available Monday-Friday, 9am-6pm WAT. Weekend emergency support is available for urgent cases.</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div class="flex items-start">
                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <span class="text-blue-600 font-bold">Q4</span>
                        </div>
                        <div>
                            <h4 class="text-md md:text-2xl font-bold font-serif text-gray-900 mb-2">Can I volunteer with your foundation?</h4>
                            <p class="text-gray-600 text-sm">Absolutely! We welcome volunteers. Contact us through any channel above to learn about current opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 text-center">
                <a href="#" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    View all FAQs
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
        
        {/* <!-- Contact CTA --> */}
        <div class="mt-10 text-center">
            <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-xl">
                <div class="w-3 h-3 bg-white rounded-full animate-ping mr-3"></div>
                <p class="text-white font-bold text-[8px] md:text-lg">Ready to make a difference? Get in touch today!</p>
            </div>
        </div>
    </div>
</div>
</div>
                    
                </section>
   
  );
}
