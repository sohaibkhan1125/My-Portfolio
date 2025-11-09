'use client';

import Image from 'next/image';
import { Oswald } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';

const oswald = Oswald({ subsets: ['latin'], weight: '700' });

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated hero paragraphs (type and delete word-by-word, auto-slide every ~4s)
  const paragraphs = useMemo(
    () => [
      "I specialize in creating beautiful, functional, and user-friendly web applications. With a passion for clean code and innovative design, I help businesses bring their digital visions to life through modern web technologies.",
      "From blazing-fast Next.js frontends to scalable backends, I build modern solutions that are optimized for performance, SEO, and conversions.",
      "I partner with startups and brands to design, develop, and launch polished products with clean UX, thoughtful animations, and maintainable code."
    ],
    []
  );

  const [activeParagraphIndex, setActiveParagraphIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Cycle paragraphs every 5 seconds with fade-out then fade-in
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setActiveParagraphIndex((i) => (i + 1) % paragraphs.length);
        setFadeIn(true);
      }, 300); // fade-out duration
    }, 5000);
    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5C3E94] via-[#412B6B] to-[#211832] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#5C3E94] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#412B6B] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#5C3E94] rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            data-aos="fade-right"
            className="text-center lg:text-left"
          >
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              <span className={`${oswald.className} `}>Professional Web Developer</span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-lg text-gray-200 mb-8 max-w-2xl min-h-[5.25rem]"
            >
              <p className={`leading-7 transition-opacity duration-700 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                {paragraphs[activeParagraphIndex]}
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="bg-[#5C3E94] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#412B6B] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-[#5C3E94] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5C3E94] hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative hover:scale-105 transition-transform duration-300">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#5C3E94] to-[#412B6B] p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <Image
                    src="/hero.jpg"
                    alt="Sohaib Faisal Khan"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5C3E94] rounded-full flex items-center justify-center text-2xl animate-bounce">
                💻
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#412B6B] rounded-full flex items-center justify-center text-2xl animate-pulse">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
