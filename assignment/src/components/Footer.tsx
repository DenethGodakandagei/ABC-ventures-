"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#891739] rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[100px] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-widest Playfair">
            A B C
          </h1>
          <p className="-mt-1 sm:-mt-2 tracking-wide Playfair text-base sm:text-lg">
            VENTURES
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-300">
            Distinguished leader in Qatar’s hospitality and food & beverage
            industry, delivering unparalleled culinary experiences.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-lg sm:text-xl text-yellow-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-lg sm:text-xl text-yellow-400" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-lg sm:text-xl text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-base sm:text-lg mb-3 Playfair">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            <li><a href="#">Services &amp; Leisures</a></li>
            <li><a href="#">Our Restaurants</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Restaurant Categories */}
        <div>
          <h2 className="font-semibold text-base sm:text-lg mb-3 Playfair">
            Restaurant Categories
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            <li><a href="#">Home-grown Restaurants</a></li>
            <li><a href="#">Franchised Restaurants</a></li>
            <li><a href="#">Virtual Restaurants</a></li>
            <li><a href="#">Surrey Suites</a></li>
            <li><a href="#">Munia Catering</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-base sm:text-lg mb-3 Playfair">
            Stay Connected
          </h2>
          <p className="text-sm sm:text-base mb-4 text-gray-200">
            Subscribe to our newsletter for updates on new restaurants and
            exclusive offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="john@gmail.com"
              className="px-4 py-2 text-sm sm:text-base text-black bg-white outline-none rounded-tl-2xl rounded-br-2xl"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white border font-semibold px-4 py-2 hover:bg-gray-100 hover:text-[#891739] transition rounded-tl-2xl rounded-br-2xl w-24 sm:w-28 Playfair"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-600 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-300 gap-3">
        <p className="text-center md:text-left">
          © 2025 ABC Ventures. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
