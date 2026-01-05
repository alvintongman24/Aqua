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
                   <div className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden">
   
    <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/10 to-cyan-500/5 rounded-full blur-3xl"></div>
    
   
    <div className="relative mb-16 text-center">
        <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 via-amber-100 to-orange-100 bg-clip-text text-transparent font-serif tracking-tight">
                KEY ACHIEVEMENTS
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
        </div>
        <p className="text-amber-100/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
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
                            <div className="text-amber-500">
                                ★★★★★
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Significant reductions in global hunger could become achievable in the coming years through strategic partnerships and sustainable interventions.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <span>2 hours ago</span>
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
                            <div className="text-amber-500">
                                ★★★★☆
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We're moving toward a future where food security becomes a reality for more communities worldwide through innovation and collective action.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <span>5 hours ago</span>
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
                            <div className="text-amber-500">
                                ★★★★★
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The prospect of reduced global hunger in the coming years represents a remarkable achievement in human progress and collaborative humanitarian work.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <span>1 day ago</span>
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

   
    <div className="fixed bottom-8 right-8 z-10">
        <button className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Add Comment
            </span>
        </button>
    </div>
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
