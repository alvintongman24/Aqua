// components/Navbar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { CircleDot } from 'lucide-react';

export default function FourthSection() {
  const [Donate, setDonate] = useState('');
  const [Email, setEmail] = useState('');
  const [paystackLoaded, setPaystackLoaded] = useState(false);
  const paystackRef = useRef(null);

  
  const[Time1,setRealTime1]=useState();
  

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


useEffect(() => {
    const timer = setInterval(() => {
      setRealTime1(new Date().getDay());
    }, 1000);
return () => clearInterval(timer);
  }, []);




    


  // Rest of your component remains the same...
  return (


     <section className="md:m-34 mt-10">
                   <div className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden">
   
    <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl"></div>
    
   
    <div className="relative mb-16 text-center">
        <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-orange-900 bg-clip-text text-transparent font-serif tracking-tight">
                KEY ACHIEVEMENTS
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
        </div>
        <p className="text-amber-600/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Transforming Lives Through Compassionate Action
        </p>
    </div>

    
    <div className="relative max-w-6xl mx-auto">
       
        <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-amber-500/30 rounded-full"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-blue-500/30 rounded-full"></div>
        
        
        <div className="relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50">
            
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
            
            
            <div className="relative p-8 md:p-12">
               
                <div className="absolute top-8 right-8 w-20 h-20 opacity-10">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd"/>
                    </svg>
                </div>
                
               
                <div className="grid lg:grid-cols-3 gap-8 mb-10">
                   
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 rounded-2xl p-6 border border-amber-900/30">
                            <h3 className="text-xl font-bold text-amber-200 mb-6 font-serif">Impact At A Glance</h3>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mr-4">
                                        <span className="text-2xl font-bold text-white">✓</span>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white">10,000+</p>
                                        <p className="text-amber-100/70 text-sm">Lives Impacted</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mr-4">
                                        <span className="text-2xl font-bold text-white">❤️</span>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white">50+</p>
                                        <p className="text-amber-100/70 text-sm">Communities Served</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center mr-4">
                                        <span className="text-2xl font-bold text-white">🏫</span>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white">25+</p>
                                        <p className="text-amber-100/70 text-sm">Schools Supported</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl leading-relaxed text-amber-50/90 font-light italic border-l-4 border-amber-500 pl-6 py-2 bg-amber-500/5 rounded-r-lg">
                                The Aqua Foundation is dedicated to uplifting the most vulnerable in society — widows, orphans, prisoners, the destitute, and the poorest of the poor.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-5 border border-gray-700/50">
                                    <h4 className="text-lg font-bold text-amber-200 mb-3 flex items-center">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                                        Our Mission
                                    </h4>
                                    <p className="text-amber-50/80 text-sm leading-relaxed">
                                        Providing access to healthcare, education, welfare support, legal aid, and sustainable empowerment opportunities through charity, compassion, and collective action.
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-5 border border-gray-700/50">
                                    <h4 className="text-lg font-bold text-amber-200 mb-3 flex items-center">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                                        Our Vision
                                    </h4>
                                    <p className="text-amber-50/80 text-sm leading-relaxed">
                                        Building a society where no one is denied basic needs — food, shelter, education, water, healthcare, justice, and dignity.
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-amber-50/90 leading-relaxed">
                                We exist to reduce poverty and restore dignity regardless of ethnicity, religion, race, gender, or nationality. By joining hands, we meet the needs of many, inspire hope, and create pathways to better lives for those society often overlooks.
                            </p>
                            
                            <p className="text-amber-50/90 leading-relaxed">
                                Through community outreach, data-driven interventions, and strategic partnerships, we address prioritized needs including clean water, school facilities, healthcare infrastructure, correctional welfare, and post-prison reintegration. The Aqua Foundation envisions a future where vulnerable individuals and communities are empowered to not only survive but to thrive — with smiles restored, rights protected, and lives transformed.
                            </p>
                        </div>
                    </div>
                </div>
                
                
                <div className="border-t border-gray-800 pt-10">
                    <h3 className="text-2xl font-bold text-center text-amber-200 mb-8 font-serif">Our Impact Pillars</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center p-4 rounded-xl bg-gradient-to-b from-amber-900/20 to-transparent border border-amber-800/30">
                            <div className="text-amber-400 text-2xl mb-2">🏥</div>
                            <h4 className="font-bold text-amber-100">Healthcare</h4>
                            <p className="text-amber-100/70 text-xs mt-1">Medical access for all</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-800/30">
                            <div className="text-blue-400 text-2xl mb-2">🎓</div>
                            <h4 className="font-bold text-amber-100">Education</h4>
                            <p className="text-amber-100/70 text-xs mt-1">Learning opportunities</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-b from-emerald-900/20 to-transparent border border-emerald-800/30">
                            <div className="text-emerald-400 text-2xl mb-2">⚖️</div>
                            <h4 className="font-bold text-amber-100">Legal Aid</h4>
                            <p className="text-amber-100/70 text-xs mt-1">Justice for the vulnerable</p>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-800/30">
                            <div className="text-purple-400 text-2xl mb-2">💧</div>
                            <h4 className="font-bold text-amber-100">Clean Water</h4>
                            <p className="text-amber-100/70 text-xs mt-1">Sustainable access</p>
                        </div>
                    </div>
                </div>
                
               
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl border border-amber-500/30">
                        <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                        <p className="text-lg font-bold text-amber-100">
                            Join us in restoring hope and dignity to vulnerable communities worldwide
                        </p>
                        <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                     <section className="relative py-16 px-4 md:px-8 overflow-hidden">
    {/* <!-- Background decorative elements --> */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-orange-100/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-100/20 to-cyan-100/10 rounded-full blur-3xl"></div>
    
    {/* <!-- Header section --> */}
    <div className="relative max-w-6xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
                    Community Voices
                </h2>
                <p className="text-gray-600 mt-2">What supporters and partners are saying about our work</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full opacity-60"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full opacity-30"></div>
            </div>
        </div>
    </div>

    {/* <!-- Comments grid --> */}
    <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* <!-- Comment Card 1 --> */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* <!-- Decorative corner --> */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent -translate-y-16 translate-x-16 rotate-45"></div>
                </div>
                
                <div className="flex items-start gap-4">
                    {/* <!-- Avatar with status indicator --> */}
                    <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxMUc_2D0YRzfmsaVQb5aE3pfTFXRowyngA&s"
                                alt="Robert James"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-white font-bold">✓</span>
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Robert James</h3>
                                <p className="text-sm text-gray-500">Philanthropist & Donor</p>
                            </div>
                           
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Significant reductions in global hunger could become achievable in the coming years through strategic partnerships and sustainable interventions.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <span>{Time1 + 4}days ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Comment Card 2 --> */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* <!-- Decorative corner --> */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent -translate-y-16 translate-x-16 rotate-45"></div>
                </div>
                
                <div className="flex items-start gap-4">
                    {/* <!-- Avatar --> */}
                    <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://media.istockphoto.com/id/1934746708/photo/confident-businessman-wearing-suit-and-tie-agains-isolated-background.jpg"
                                alt="Thomas Bratt"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-white font-bold">✓</span>
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Thomas Bratt</h3>
                                <p className="text-sm text-gray-500">Humanitarian Advisor</p>
                            </div>
                           
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We're moving toward a future where food security becomes a reality for more communities worldwide through innovation and collective action.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <span> {Time1 + 1}days ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Comment Card 3 --> */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* <!-- Decorative corner --> */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent -translate-y-16 translate-x-16 rotate-45"></div>
                </div>
                
                <div className="flex items-start gap-4">
                    {/* <!-- Avatar --> */}
                    <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://snworksceo.imgix.net/ame-egl/82590b2d-2891-4e8e-a5b0-8f5594740c92.sized-1000x1000.jpg"
                                alt="H. Wellson"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-white font-bold">✓</span>
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">H. Wellson</h3>
                                <p className="text-sm text-gray-500">Development Expert</p>
                            </div>
                           
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The prospect of reduced global hunger in the coming years represents a remarkable achievement in human progress and collaborative humanitarian work.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <span> {Time1 + 3} day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Add Your Comment Section --> */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-serif">Share Your Thoughts</h3>
                    <p className="text-gray-600">Join the conversation and share your perspective</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="comment">
                        <span className="flex items-center">
                            <span className="text-lg">Your Opinion Matters</span>
                            <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">Required</span>
                        </span>
                        <span className="text-sm text-gray-500 font-normal block mt-1">Share your thoughts on humanitarian work and global progress</span>
                    </label>
                    
                    <div className="relative">
                        <textarea
                            id="comment"
                            placeholder="Share your thoughts on how we can collectively reduce global hunger and improve lives..."
                            className="w-full min-h-[180px] p-5 rounded-xl border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-all duration-300 resize-none text-gray-700"
                            rows="5"
                        ></textarea>
                        
                        <div className="absolute bottom-3 right-3 flex items-center gap-2">
                            <span className="text-gray-400 text-sm">
                                <span id="charCount">0</span>/500
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        Comment Guidelines
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-1 mr-3"></div>
                            <span>Be respectful and constructive</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-1 mr-3"></div>
                            <span>Share personal experiences if relevant</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-1 mr-3"></div>
                            <span>No promotional content</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-1 mr-3"></div>
                            <span>Maximum 500 characters</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-gray-600 text-sm">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <span className="text-gray-700 font-bold">?</span>
                    </div>
                    <span>Your comment will be publicly visible after moderation</span>
                </div>
                
                <div className="flex gap-4">
                    <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        Cancel
                    </button>
                    <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                        </svg>
                        Post Comment
                    </button>
                </div>
            </div>
        </div>
    </div>

   
   
</section>

<div className="space-y-10 bg-gray-100 md:p-10 p-1 rounded-2xl shadow-2xl ">
  
  {/* DONATE POPUP MODAL - Initially Hidden */}
  <div id="donateModal" className="fixed inset-0 z-50 hidden items-center justify-center  bg-opacity-80 p-4 overflow-y-auto">
    <div className="relative w-full  rounded-2xl bg-white shadow-2xl my-8 justify-center items-center">
      {/* Close Button */}
      <button 
        onClick={() => document.getElementById('donateModal').classList.add('hidden')}
        className="absolute right-6 top-6 z-10 rounded-full bg-gray-100 p-3 hover:bg-gray-200 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      
      {/* Modal Content */}
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-4 md:p-6">
  <div className="w-full max-w-2xl bg-white/95 backdrop-blur-xl border-2 border-amber-200/50 rounded-2xl shadow-2xl p-6 md:p-10 animate-fade-in relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-100/30 to-yellow-100/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-100/30 to-yellow-100/20 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
    
    <div className="text-center mb-10 relative">
      <div className="inline-block mb-6">
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto rounded-full mb-2"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-amber-900 font-serif tracking-wider">
          MAKE A DONATION
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-600 to-amber-400 mx-auto rounded-full"></div>
      </div>
      <p className="text-amber-800/80 mt-4 text-sm md:text-base font-light">
        Support our mission with a premium donation experience
      </p>
    </div>
    
    <form className="space-y-8 relative" onSubmit={handlePaystackPayment}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <label htmlFor="modalFirstName" className="block text-amber-900 font-semibold mb-3 text-sm tracking-widest uppercase">First Name</label>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-30 rounded-xl blur transition duration-500"></div>
            <input 
              required 
              type="text" 
              id="modalFirstName" 
              className="relative w-full px-5 py-4 bg-white border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/50 transition-all duration-300 font-medium"
              placeholder="Enter first name"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <label htmlFor="modalLastName" className="block text-amber-900 font-semibold mb-3 text-sm tracking-widest uppercase">Last Name</label>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-400 opacity-0 group-hover:opacity-30 rounded-xl blur transition duration-500"></div>
            <input 
              required 
              type="text" 
              id="modalLastName" 
              className="relative w-full px-5 py-4 bg-white border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/50 transition-all duration-300 font-medium"
              placeholder="Enter last name"
            />
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <label htmlFor="email" className="block text-amber-900 font-semibold mb-3 text-sm tracking-widest uppercase">Email Address</label>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-30 rounded-xl blur transition duration-500"></div>
          <input 
            required 
            type="email" 
            id="email" 
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative w-full px-5 py-4 bg-white border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/50 transition-all duration-300 font-medium"
            placeholder="your.email@example.com"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89-4.42a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <label htmlFor="modalPhone" className="block text-amber-900 font-semibold mb-3 text-sm tracking-widest uppercase">Phone Number</label>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-30 rounded-xl blur transition duration-500"></div>
          <input 
            required 
            type="tel" 
            id="modalPhone" 
            className="relative w-full px-5 py-4 bg-white border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/50 transition-all duration-300 font-medium"
            placeholder="+1 (555) 123-4567"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="relative group">
        <label htmlFor="donate" className="block text-amber-900 font-semibold mb-3 text-sm tracking-widest uppercase">Donation Amount</label>
        <div className="relative mb-4">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-30 rounded-xl blur transition duration-500"></div>
          <div className="relative flex items-center">
            <span className="absolute left-5 text-amber-700 font-bold text-lg">₦</span>
            <input 
              placeholder="2000" 
              type="number" 
              id="donate" 
              value={Donate}
              onChange={(e) => setDonate(e.target.value)}
              className="relative w-full pl-12 pr-5 py-4 bg-white border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/50 transition-all duration-300 font-medium text-lg"
            />
            <div className="absolute right-4 text-amber-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 01118 0z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
          {[1000, 2000, 5000, 10000, 20000].map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setDonate(amount.toString())}
              className="px-4 py-3 bg-gradient-to-b from-amber-50 to-white border-2 border-amber-300 rounded-xl text-amber-800 font-semibold hover:bg-gradient-to-b hover:from-amber-100 hover:to-yellow-50 hover:border-amber-500 hover:text-amber-900 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md text-sm"
            >
              <span className="text-amber-600">₦</span>{amount.toLocaleString()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative group">
        <label htmlFor="modalMessage" className="block text-amber-900 font-semibold mb-3 text-sm tracking-widest uppercase">Your Message (Optional)</label>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-200 to-yellow-200 opacity-0 group-hover:opacity-30 rounded-xl blur transition duration-500"></div>
          <textarea 
            id="modalMessage" 
            rows="4" 
            className="relative w-full px-5 py-4 bg-white border-2 border-amber-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/50 transition-all duration-300 font-medium resize-none"
            placeholder="Tell us how you'd like your donation to be used..."
          ></textarea>
        </div>
      </div>
      
      <div className="relative group mt-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <button 
          type="submit" 
          className="relative w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white py-6 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:gap-4 group-hover:scale-[1.02] shadow-lg hover:shadow-amber-200/50"
        >
          <svg className="w-7 h-7 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
          </svg>
          <span className="tracking-widest">PROCEED TO DONATE</span>
          <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
      </div>
      
      <div className="text-center pt-6 border-t border-amber-200">
        <p className="text-amber-700/80 text-sm">
          Your donation supports our mission to provide clean water access to communities in need.
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <p className="text-amber-600 text-xs font-semibold tracking-wide">Secure Payment</p>
          </div>
          <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
            <p className="text-amber-600 text-xs font-semibold tracking-wide">256-bit Encryption</p>
          </div>
          <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200"></div>
            <p className="text-amber-600 text-xs font-semibold tracking-wide">Instant Processing</p>
          </div>
        </div>
      </div>
    </form>
    
    {/* Premium badge */}
    <div className="absolute top-6 right-6">
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        PREMIUM SECURE
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  
  {/* FLOATING DONATE BUTTON */}
  <div className="fixed bottom-8 right-8 z-40">
    <button 
      onClick={() => document.getElementById('donateModal').classList.remove('hidden')}
      className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 group animate-pulse"
    >
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
      </svg>
      <span className="absolute right-20 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        DONATE NOW
      </span>
    </button>
  </div>
  
  {/* CONTACT INFORMATION SECTION - Your existing code continues below */}
  <div className="relative">
    {/* Background decorative elements */}
    <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 blur-xl"></div>
    <div className="absolute bottom-10 -right-6 w-32 h-32 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-full opacity-50 blur-xl"></div>
    
    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200/50 backdrop-blur-sm font-sans text-md md:text-lg">
      
      {/* Remove the original donation form from this section */}
      
      {/* Contact Information Header */}
      <div className="mb-10">
        <div className="inline-flex items-center mb-4">
          <div className="w-3 h-10 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full mr-3"></div>
          <h2 className="text-md md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent font-serif">
            Contact Information
          </h2>
        </div>
        <p className="text-gray-600 max-w-xl">We're here to help and answer any questions you might have. Reach out to us through any channel below.</p>
        
        {/* Contact badge */}
        <div className="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-md">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
          <span className="text-white text-sm font-semibold">24/7 Support Available</span>
        </div>
      </div>
      
      {/* The rest of your contact information code remains exactly the same */}
      {/* ... */}
      
    </div>
  </div>
</div>
                    
                </section>
   
  );
}
