"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

function Page() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      title: "From your couch",
      subtitle: "to the world",
      description: "Join Legal X and globalize your business",
      image: "/Screenshot.svg", // Add your image path
      backgroundImage: "/bg1.svg", // Add your background image path
    },
    {
      title: "We Help You Pivot Your Career",
      subtitle: "",
      description: "Connect with top lawyers from anywhere in the world",
      image: "/Screenshot1.svg", // Add your image path
      backgroundImage: "/bg2.svg", // Add your background image path
    },
    {
      title: "Reinvent Your Business ",
      subtitle: "",
      description: "Revolutionary legal services at your fingertips",
      image: "/Screenshot2.svg",
      backgroundImage: "/bg3.svg", // Add your background image path
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.backgroundImage}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent z-5"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-[#b3872d]">
                    {slides[currentSlide].title}
                  </span>
                  <br />
                  <span className="text-white">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Partnership Section */}
              <div className="pt-6 lg:pt-8">
                <p className="text-gray-400 mb-4 lg:mb-6 text-sm sm:text-base">
                  We <span className="text-[#b3872d]">partner with</span> the
                  best professionals
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/Group.svg"
                    alt="Group"
                    width={600}
                    height={0}
                    className="mb-4 w-full max-w-xs sm:max-w-sm lg:max-w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Image Slider */}
            <div className="relative flex justify-center items-center order-first lg:order-last">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-[300px] sm:h-[400px] lg:h-[500px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === currentSlide
                        ? "opacity-100 scale-100 translate-x-0"
                        : "opacity-0 scale-95 translate-x-4"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={`Legal Professional ${index + 1}`}
                      width={600}
                      height={600}
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-200 z-20"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-200 z-20"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-[#b3872d] w-3 h-3 sm:w-4 sm:h-4"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
