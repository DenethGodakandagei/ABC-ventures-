"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#891739] rounded-tl-[100px] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-bold tracking-widest">A B C</h1>
          <p className="mt-2 text-sm">VENTURES</p>
          <p className="mt-4 text-sm leading-relaxed">
            Distinguished leader in Qatar’s hospitality and food & beverage
            industry, delivering unparalleled culinary experiences.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-yellow-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-yellow-400" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-xl hover:text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
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
          <h2 className="font-semibold text-lg mb-3">Restaurant Categories</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home-grown Restaurants</a></li>
            <li><a href="#">Franchised Restaurants</a></li>
            <li><a href="#">Virtual Restaurants</a></li>
            <li><a href="#">Surrey Suites</a></li>
            <li><a href="#">Munia Catering</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Stay Connected</h2>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for updates on new restaurants and exclusive offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="john@gmail.com"
              className="px-4 py-2 rounded-md text-black outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#891739] font-semibold px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-300">
        <p>© 2025 ABC Ventures. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Back to Top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
