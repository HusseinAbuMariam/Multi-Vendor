import React from "react";
import { Link } from "react-router-dom";  
const Footer = () => {
  return (
    <footer className="w-screen ml-[calc(-50vw+49.3%)] bg-[#132f48] text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MultiVendor</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              MultiVendor is your one-stop platform to explore multiple stores,
              discover great products, and enjoy a seamless shopping experience.
            </p>

            {/* Social */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-[#f4a261] transition">Twitter</a>
              <a href="#" className="hover:text-[#f4a261] transition">GitHub</a>
              <a href="#" className="hover:text-[#f4a261] transition">LinkedIn</a>
            </div>
          </div>

          {/* Stores */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Stores</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#f4a261] transition">
                  Browse Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f4a261] transition">
                  Top Vendors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f4a261] transition">
                  Become a Vendor
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/products/electronics" className="hover:text-[#f4a261]">Electronics</Link></li>
              <li><Link to="/products/fashion" className="hover:text-[#f4a261]">Fashion</Link></li>
              <li><Link to="/products/beauty" className="hover:text-[#f4a261]">Beauty</Link></li>
              <li><Link to="/products/toys" className="hover:text-[#f4a261]">Gaming</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#f4a261] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f4a261] transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f4a261] transition">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>© 2026 MultiVendor. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#f4a261]">Privacy Policy</a>
            <a href="#" className="hover:text-[#f4a261]">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;