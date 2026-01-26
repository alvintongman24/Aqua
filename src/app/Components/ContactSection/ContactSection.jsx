"use client";

import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';

export default function FuturisticContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct mailto URL with form data
    const subject = encodeURIComponent(`[Aqua Foundation Contact] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nThis message was sent via the Aqua Foundation contact form.`
    );
    
    const mailtoLink = `mailto:aquafoundation@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate sending delay and show success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add CSS animations to your global stylesheet
  const styleContent = `
    @keyframes float-slow {
      0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
      50% { transform: translateY(-20px) rotate(var(--rotation)); }
    }
    
    @keyframes gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes particle {
      0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
      50% { transform: translateY(-40px) scale(0.8); opacity: 0.5; }
    }
    
    @keyframes expand {
      0% { width: 0; opacity: 0; }
      100% { width: 4rem; opacity: 1; }
    }
    
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    .animate-float-slow {
      animation: float-slow 6s ease-in-out infinite;
      --rotation: 45deg;
    }
    
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    
    .animate-particle {
      animation: particle 4s ease-in-out infinite;
    }
    
    .animate-expand {
      animation: expand 1s ease-out forwards;
    }
    
    .animate-expand.delay-300 {
      animation-delay: 0.3s;
    }
    
    .animate-bounce-slow {
      animation: bounce-slow 2s ease-in-out infinite;
    }
    
    .animate-fade-in {
      animation: fade-in 0.5s ease-out forwards;
    }
    
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 2s ease-in-out infinite;
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    
    .animate-shimmer {
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
      background-size: 1000px 100%;
      animation: shimmer 3s infinite linear;
    }
  `;

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Add styles to head */}
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400/10 to-yellow-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-yellow-500/10 to-amber-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-tr from-amber-300/5 to-yellow-300/5 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      {/* Main form container */}
      <div className="relative w-full max-w-2xl">
        {/* Decorative floating elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-yellow-600/10 rounded-3xl rotate-45 blur-xl animate-float-slow"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-yellow-500/20 to-amber-500/10 rounded-2xl rotate-12 blur-xl animate-float-slow delay-1000"></div>
        
        {/* Form header with animated elements */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full animate-expand"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 font-serif tracking-tight relative">
              GET IN TOUCH
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"></span>
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-600 to-amber-400 rounded-full animate-expand delay-300"></div>
          </div>
          <p className="text-amber-800/70 text-lg font-light max-w-lg mx-auto">
            Connect directly with Aqua Foundation team
          </p>
          
          {/* Animated particles */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-particle"></div>
          <div className="absolute top-6 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-particle delay-200"></div>
          <div className="absolute -top-4 left-2/3 w-3 h-3 bg-amber-400 rounded-full animate-particle delay-500"></div>
        </div>

        {/* Main form card */}
        <div className="relative bg-white/95 backdrop-blur-xl border-2 border-amber-200/50 rounded-3xl shadow-2xl overflow-hidden">
          {/* Animated top border */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 animate-gradient-x"></div>
          
          <div className="p-8 md:p-10 relative">
            {/* Email destination display */}
            <div className="mb-8 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-amber-700 font-medium">Messages will be sent to:</p>
                  <p className="text-lg font-bold text-amber-900 font-mono">aquafoundation@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Success overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50/90 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow shadow-2xl">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900 mb-3 font-serif">Email Opened!</h3>
                  <p className="text-amber-700/80 text-lg mb-4">Complete your message in your email client</p>
                  <div className="text-sm text-amber-600 font-medium space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span>Recipient: aquafoundation@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                      <span>Your information has been pre-filled</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form elements */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name field */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-500"></div>
                <div className="relative">
                  <label className="block mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 border border-amber-200 flex items-center justify-center shadow-sm">
                        <User className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-amber-900 font-semibold text-lg tracking-wider">YOUR NAME</span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-6 py-5 bg-white border-2 border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/60 transition-all duration-300 font-medium text-lg shadow-sm hover:shadow-md"
                    />
                  </label>
                </div>
              </div>

              {/* Email field */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-400 opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-500"></div>
                <div className="relative">
                  <label className="block mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 to-amber-100 border border-yellow-200 flex items-center justify-center shadow-sm">
                        <Mail className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-amber-900 font-semibold text-lg tracking-wider">YOUR EMAIL</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-6 py-5 bg-white border-2 border-yellow-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/60 transition-all duration-300 font-medium text-lg shadow-sm hover:shadow-md"
                    />
                  </label>
                </div>
              </div>

              {/* Subject field */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-500"></div>
                <div className="relative">
                  <label className="block mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-200 flex items-center justify-center shadow-sm">
                        <Sparkles className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-amber-900 font-semibold text-lg tracking-wider">SUBJECT</span>
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What would you like to discuss?"
                      className="w-full px-6 py-5 bg-white border-2 border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/60 transition-all duration-300 font-medium text-lg shadow-sm hover:shadow-md"
                    />
                  </label>
                </div>
              </div>

              {/* Message field */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-500"></div>
                <div className="relative">
                  <label className="block mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 flex items-center justify-center shadow-sm">
                        <MessageSquare className="w-5 h-5 text-amber-700" />
                      </div>
                      <span className="text-amber-900 font-semibold text-lg tracking-wider">YOUR MESSAGE</span>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Share your thoughts, questions, or ideas with us..."
                      className="w-full px-6 py-5 bg-white border-2 border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 text-amber-900 placeholder-amber-400/60 transition-all duration-300 font-medium text-lg shadow-sm hover:shadow-md resize-none"
                      maxLength="500"
                    />
                  </label>
                  <div className="flex justify-between items-center mt-3 px-2">
                    <span className="text-amber-600/70 text-sm font-medium">
                      <span className="text-amber-700">{formData.message.length}</span>/500 characters
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-amber-700/70 text-sm font-medium">Will be included in email</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="relative group pt-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 group-hover:gap-5 group-hover:scale-[1.02] shadow-lg hover:shadow-amber-200/50 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="tracking-wider">OPENING EMAIL...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-7 h-7 animate-pulse-slow" />
                      <span className="tracking-wider">OPEN EMAIL CLIENT</span>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Sparkles className="w-5 h-5" />
                      </div>
                    </>
                  )}
                </button>
                
                {/* Instruction text */}
                <p className="text-center text-amber-700/70 text-sm mt-4">
                  This will open your email client with a pre-filled message to Aqua Foundation
                </p>
              </div>

              {/* Security info */}
              <div className="border-t border-amber-200 pt-6 mt-8">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-amber-700 text-sm font-semibold">Direct to: aquafoundation@gmail.com</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-300 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                    <span className="text-amber-700 text-sm font-semibold">Pre-filled Email Template</span>
                  </div>
                  <div className="w-1 h-1 bg-amber-300 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-400"></div>
                    <span className="text-amber-700 text-sm font-semibold">24/7 Team Monitoring</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Floating Aqua Foundation badge */}
        <div className="absolute -bottom-6 right-6">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-bounce-slow">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full"></div>
            AQUA FOUNDATION
          </div>
        </div>
        
        {/* Alternative contact info */}
        <div className="mt-12 text-center">
          <p className="text-amber-800/60 text-sm">
            Having trouble with the form? Email us directly at{" "}
            <a 
              href="mailto:aquafoundation@gmail.com" 
              className="text-amber-700 font-semibold hover:text-amber-900 transition-colors underline decoration-amber-400 decoration-2"
            >
              aquafoundation@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}