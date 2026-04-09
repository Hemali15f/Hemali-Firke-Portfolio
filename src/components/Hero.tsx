// import React from 'react';
import { ArrowDown, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-600/20 rounded-full opacity-1 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 dark:bg-emerald-600/20 rounded-full opacity-1 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className=" text-center">

          {/* Profile Image */}
          <div className="mb-6 mt-20 relative">
  className="w-60 h-60 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 p-[3px] 
shadow-[0_0_25px_rgba(0,255,255,0.8),0_0_60px_rgba(0,255,255,0.6),0_0_90px_rgba(0,255,255,0.4)] animate-pulse"

    <img
      src="/profile-photo.png"
      alt="Hemali Firke"
      className="w-full h-full rounded-full object-cover object-[50%_15%] scale-110 bg-gray-200 dark:bg-gray-700"
    />

  </div>
</div>
          
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent">
              Hemali
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Code className="h-5 w-5 text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Full Stack Developer</span>
            </div>

          </div>

          <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
  A dedicated and innovative B. Tech Computer Engineering student with a strong foundation in programming, and web technologies. Passionate about crafting efficient, user-centric solutions and contributing to impactful technical projects.
</p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#projects"
              className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-300 hover:from-violet-700 hover:to-cyan-500 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 transform hover:shadow-lg"

            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-300 hover:from-violet-600 hover:to-cyan-500 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 transform hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce ">
            <a href="#about" className="font-bold inline-flex items-center text-gray-200 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ">
              <ArrowDown className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
