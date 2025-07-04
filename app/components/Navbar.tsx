"use client"
import React, { useState, } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page
  const isHomePage = pathname === '/';

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Legal News', href: '/news' },
    // { name: 'Academy', href: '/academy' },
    { name: 'Contact us', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dynamic classes based on page
  const navClasses = isHomePage 
    ? "bg-transparent text-white" 
    : "bg-white text-black ";
  
  const linkClasses = isHomePage 
    ? "text-white hover:text-[#b3872d]" 
    : "text-black hover:text-[#b3872d]";
  
  const mobileButtonClasses = isHomePage 
    ? "text-white hover:text-[#b3872d]" 
    : "text-black hover:text-[#b3872d]";

  const logoSrc = isHomePage 
    ? "/LegalX-white.svg" 
    : "/LegalX-black.svg"; // You'll need a black version of your logo

  return (
    <nav className={`${navClasses} px-4 sm:px-6 lg:px-42 py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <Image 
              src={logoSrc}
              alt="LegalX Logo" 
              width={100}
              height={0}
              className="mb-4"
              priority
            />
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${linkClasses} transition-colors duration-200 text-sm font-medium`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-[#b3872d] text-[#b3872d] px-6 py-2  hover:bg-[#b3872d] hover:text-black transition-colors duration-200 text-sm font-medium">
            Sign Up
          </button>
          <button className="bg-[#b3872d] text-black px-7 py-2  hover:bg-[#b3872d] transition-colors duration-200 text-sm font-medium flex items-center space-x-1">
            <span>Log In</span>
            
          </button>
        </div>

        {/* Mobile Auth Buttons - Between Logo and Menu Icon */}
        <div className="md:hidden flex items-center space-x-2">
          <button className="border border-[#b3872d] text-[#b3872d] px-3 py-1 text-xs font-medium hover:bg-[#b3872d] hover:text-black transition-colors duration-200">
            Sign Up
          </button>
          <button className="bg-[#b3872d] text-black px-3 py-1 text-xs font-medium hover:bg-[#b3872d] transition-colors duration-200">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className={`${mobileButtonClasses} transition-colors duration-200`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only Navigation Links */}
      {isMobileMenuOpen && (
        <div className={`md:hidden mt-6 pb-6 px-4 ${isHomePage ? '' : 'bg-white'}`}>
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${linkClasses} transition-colors duration-200 text-base font-medium py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;