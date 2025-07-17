import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-gray-200 bg-white py-8 mt-16">
      {/* Logo Container */}
      <div className="w-full flex justify-center items-center mb-8">
        <div className="relative">
          <Image src="/parofund.svg" alt="Parofund Logo" className="w-auto" />
          {/* Non-absolute blur effect - using a div with background gradient */}
          <div className="h-15 w-full bg-gradient-to-t from-gray-600 to-transparent -mt-6 blur-lg"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Sign In Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Image src="/logoo.svg" alt="Parofund Logo" />
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                Sign in
              </button>
              <button className="border px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#165b00] to-[#437a31] shadow-xl shadow-[#1F610A4D]">
                Create an Account
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaYoutube />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500 mt-2">
              © {new Date().getFullYear()} Legal X. All rights reserved.
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-medium text-[18px] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-800">
                  Whats Possible with Parofund
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-800">
                  Smart Savings Plan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-800">
                  What Our Users Say
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-800">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="font-medium text-[18px] mb-4">
              Contact Information
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: parofundapp@gmail.com</li>
              <li className="text-gray-600">Phone: +234 807 216 0000</li>
              <li className="text-gray-600">Phone: +234 814 421 0602</li>
              <li className="text-gray-600">
                Address: Suite 8 B 4/2 Immanuel Plaza, 2nd 7/10, Chroma Ebieme
                Crescent, wuye, Abuja
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-medium text-[18px] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-800">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-800">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
