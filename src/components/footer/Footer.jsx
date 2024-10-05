"use client";
import React from "react";
import BrandLogo from "../navbar/BrandLogo";
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer className="bg-[#1B1714] text-white pt-20 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* First Column: Logo, Description, and Contact Button */}
          <div className="col-span-3">
            <BrandLogo />
            <p className="my-4 text-gray-400">
              We provide top-quality services to help you grow your business.
              Contact us today to learn more about how we can help you succeed.
            </p>
            <Button className="font-bold py-2 px-4 rounded-2xl">
              Contact Us
            </Button>
          </div>

          {/* Second Column: Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Other Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Other Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  E-commerce Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Phone: (123) 456-7890</li>
              <li className="text-gray-400">Email: info@brandio.com</li>
              <li className="text-gray-400">Address: 123 Business St, City</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
      </div>
      <div className="border-t border-white mt-2 pt-2 text-center text-white">
        &copy; {new Date().getFullYear()} Brandio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
